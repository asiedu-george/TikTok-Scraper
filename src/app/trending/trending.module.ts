import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrendingRoutingModule } from './trending-routing.module';
import { ForYouComponent } from './for-you/for-you.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    ForYouComponent,
    DashboardComponent,
    SidebarComponent,
    TopNavComponent
  ],
  imports: [
    CommonModule,
    TrendingRoutingModule,
    RouterModule
  ]
})
export class TrendingModule { }
