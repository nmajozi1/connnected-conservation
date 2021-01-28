import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { HighChartService } from '../high-chart.service';

@Component({
  selector: 'app-column-chart',
  templateUrl: './column-chart.component.html',
  styleUrls: ['./column-chart.component.scss']
})
export class ColumnChartComponent implements OnInit {

  chart$: Observable<Chart>;

  constructor(public highChartService: HighChartService) { }

  ngOnInit() {
    // this.highChartService.column().subscribe(chart => {
    //   console.log('THE RESPONSE: ', chart);
    //   this.chart$ = chart;
    // });
  }
}
