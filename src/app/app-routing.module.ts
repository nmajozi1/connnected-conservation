import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartDrillDownComponent } from './chart-drill-down/chart-drill-down.component';
import { FundTrackerComponent } from './fund-tracker/fund-tracker.component';
import { HomeComponent } from './home/home.component';
import { ImpactComponent } from './impact/impact.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'impact', component: ImpactComponent },
  { path: 'fund-tracker', component: FundTrackerComponent },
  { path: 'chart-drill-down', component: ChartDrillDownComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
