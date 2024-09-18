import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ForYouComponent} from "./for-you/for-you.component";
import {DashboardComponent} from "./dashboard/dashboard.component";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    title: 'TikTok - Make Your Day',
    children: [
      { path: '', component: ForYouComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrendingRoutingModule { }
