import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaunchDetailComponent } from './launch-detail/launch-detail.component';
import { LaunchListComponent } from './launch-list/launch-list.component';

const routes: Routes = [
  { path: 'home', component: LaunchListComponent },
  { path: 'detail', component: LaunchDetailComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
