import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LaunchListComponent } from './launch-list/launch-list.component';
import { LaunchListItemComponent } from './launch-list-item/launch-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    LaunchListComponent,
    LaunchListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [LaunchListComponent]
})
export class AppModule { }
