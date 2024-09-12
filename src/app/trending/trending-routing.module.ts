import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ForYouComponent} from "./for-you/for-you.component";

const routes: Routes = [
  {
    path: '',
    component: ForYouComponent,
    title: 'TikTok - Make Your Day',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrendingRoutingModule { }
