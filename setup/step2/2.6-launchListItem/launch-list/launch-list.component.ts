import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Launch } from '../model/launch.model';

@Component({
  selector: 'app-launch-list',
  templateUrl: './launch-list.component.html',
  styleUrls: ['./launch-list.component.css']
})
export class LaunchListComponent implements OnInit  {

  launches: Array<Launch> =  [];
  launchPath = 'https://api.spacexdata.com/v5/launches';

  constructor(private http: HttpClient) { } 

  ngOnInit(): void {
    if (this.launches.length === 0) this.getLaunches();
  }

  getLaunches() : void {
    this.http.get<Array<Launch>>(this.launchPath).subscribe((data: Array<Launch>) => {
      this.launches = data
        .filter((item: Launch) => item.links.flickr.original.length > 0 && item.details);
      this.launches.map(item => item.isRead = false);
    })
  }

}
