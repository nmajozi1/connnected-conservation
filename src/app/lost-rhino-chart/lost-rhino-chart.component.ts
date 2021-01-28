import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Chart } from 'angular-highcharts';
import { HighChartService } from '../high-chart.service';

@Component({
  selector: 'app-lost-rhino-chart',
  templateUrl: './lost-rhino-chart.component.html',
  styleUrls: ['./lost-rhino-chart.component.scss']
})
export class LostRhinoChartComponent implements OnInit {

  chart$: Chart;

  constructor(private highChartService: HighChartService) { }

  ngOnInit() {
    this.chart$ = this.highChartService.impactChart('lostRhinos');
  }

}
