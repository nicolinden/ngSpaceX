import { Component, Input } from '@angular/core';
import { Launch } from '../model/launch.model';

@Component({
  selector: 'app-launch-list-item',
  templateUrl: './launch-list-item.component.html',
  styleUrls: ['./launch-list-item.component.css']
})
export class LaunchListItemComponent {

  @Input() launch!: Launch

  onLaunchClicked() {
    
  }

}
