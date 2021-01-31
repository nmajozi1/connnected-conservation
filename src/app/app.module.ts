import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ImpactComponent } from './impact/impact.component';
import { ColumnChartComponent } from './column-chart/column-chart.component';
import { HttpClientModule } from '@angular/common/http';
import { ChartModule } from 'angular-highcharts';
import { MatCardModule } from '@angular/material';
import { LostRhinoChartComponent } from './lost-rhino-chart/lost-rhino-chart.component';
import { PoacherTracksComponent } from './poacher-tracks/poacher-tracks.component';
import { SuspectsNeutralisedComponent } from './suspects-neutralised/suspects-neutralised.component';
import { FundTrackerComponent } from './fund-tracker/fund-tracker.component';
import { ChartDrillDownComponent } from './chart-drill-down/chart-drill-down.component';
import { RhinoTableComponent } from './rhino-table/rhino-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavHeaderComponent,
    SideNavComponent,
    ImpactComponent,
    ColumnChartComponent,
    LostRhinoChartComponent,
    PoacherTracksComponent,
    SuspectsNeutralisedComponent,
    FundTrackerComponent,
    ChartDrillDownComponent,
    RhinoTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartModule,
    HttpClientModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
