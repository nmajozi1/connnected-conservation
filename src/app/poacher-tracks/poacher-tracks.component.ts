import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { HighChartService } from '../high-chart.service';

@Component({
  selector: 'app-poacher-tracks',
  templateUrl: './poacher-tracks.component.html',
  styleUrls: ['./poacher-tracks.component.scss']
})
export class PoacherTracksComponent implements OnInit {

  chart$: Chart;

  constructor(private highChartService: HighChartService) { }

  ngOnInit() {
    this.chart$ = this.highChartService.impactChart('poacherTracks');
  }

}
