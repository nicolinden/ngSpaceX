import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Launch } from "./model/launch.model";

@Injectable()
export class LaunchService {
    launches: Array<Launch> = []
    launchPath = 'https://api.spacexdata.com/v5/launches';
    
    constructor(private http: HttpClient) {}

    getLaunches() : void {
        this.http.get<Array<Launch>>(this.launchPath).subscribe((data: Array<Launch>) => {
            this.launches = data
            .filter((item: Launch) => item.links.flickr.original.length > 0 && item.details);
            this.launches.map(item => item.isRead = false);
        })
    }
}