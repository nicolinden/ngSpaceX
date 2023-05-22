import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Launch } from "./model/launch.model";

@Injectable({providedIn: 'root'})
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
    
    getImage (launchId: string) : string {
        const launch = this.launches.find(item => item.id === launchId);
        
        if (launch) {
            const images = launch.links.flickr.original
            return images[Math.floor(Math.random() * images.length)];
        } else {
            return "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png";
        }
    }

    update(id: string, value: boolean) {
        const launch = this.launches.find(item => item.id === id);
        
        if (launch) {
            launch.isRead = value;
        }
    }

}