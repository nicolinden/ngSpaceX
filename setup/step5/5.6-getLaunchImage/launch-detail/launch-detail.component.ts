import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LaunchService } from '../launch.service';
import { Launch } from '../model/launch.model';

@Component({
  selector: 'app-launch-detail',
  templateUrl: './launch-detail.component.html',
  styleUrls: ['./launch-detail.component.css']
})
export class LaunchDetailComponent implements OnInit {

  launch!: Launch;
  launchImage = "";

  constructor(private launchService: LaunchService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams
      .subscribe(params => {
        const launchId = params['launchId'];
        this.launch = this.launchService.launches.find(item => item.id === launchId)!;
        if (!this.launch) {
          this.onNavBack();
        } else {
          this.launchImage = this.launchService.getImage(launchId);
        }
      }
    );
  }

  public onNavBack() {
    this.router.navigate([`/home`]);
  }

}
