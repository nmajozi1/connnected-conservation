import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { HighChartService } from '../high-chart.service';

@Component({
  selector: 'app-suspects-neutralised',
  templateUrl: './suspects-neutralised.component.html',
  styleUrls: ['./suspects-neutralised.component.scss']
})
export class SuspectsNeutralisedComponent implements OnInit {

  chart$: Chart;

  constructor(private highChartService: HighChartService) { }

  ngOnInit() {
    this.chart$ = this.highChartService.impactChart('suspectsNeutralised');
  }

}
