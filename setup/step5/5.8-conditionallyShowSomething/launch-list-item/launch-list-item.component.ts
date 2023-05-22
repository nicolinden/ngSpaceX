import { Component, Input } from '@angular/core';
import { Launch } from '../model/launch.model';
import { LaunchService } from '../launch.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-launch-list-item',
  templateUrl: './launch-list-item.component.html',
  styleUrls: ['./launch-list-item.component.css'],
})
export class LaunchListItemComponent {

  @Input() launch!: Launch

  constructor(private launchService: LaunchService, private router: Router) { }

  onLaunchClicked() { 
    this.launchService.update(this.launch.id, true);
    this.router.navigate([`/detail`], { queryParams: { launchId: this.launch.id } });
  }

}
