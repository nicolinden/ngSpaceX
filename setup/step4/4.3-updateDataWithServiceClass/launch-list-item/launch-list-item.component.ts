import { Component, Input } from '@angular/core';
import { Launch } from '../model/launch.model';
import { LaunchService } from '../launch.service';

@Component({
  selector: 'app-launch-list-item',
  templateUrl: './launch-list-item.component.html',
  styleUrls: ['./launch-list-item.component.css'],
  providers: [LaunchService]
})
export class LaunchListItemComponent {

  @Input() launch!: Launch

  constructor(private launchService: LaunchService) { } 

  onLaunchClicked() { 
    this.launchService.update(this.launch.id, true);
  }

}
