import { Component, OnInit } from '@angular/core';
import { Launch } from '../model/launch.model';
import { LaunchService } from '../launch.service';

@Component({
  selector: 'app-launch-list',
  templateUrl: './launch-list.component.html',
  styleUrls: ['./launch-list.component.css'],
})
export class LaunchListComponent implements OnInit  {

  constructor(private launchService: LaunchService) { } 

  get launches () { return this.launchService.launches }

  ngOnInit(): void {
    if (this.launchService.launches.length === 0) this.launchService.getLaunches();
  }

  update(launchId: string) {
    const launch = this.launches.find(item => item.id === launchId);
    launch!.isRead = !launch?.isRead; 
  }
}
