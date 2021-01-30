import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GenericService } from './generic.service';
import { Chart } from 'angular-highcharts';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HighChartService {

  constructor(
    private genericService: GenericService,
    public router: Router,
    ) { }

  provinces: any = [];
  combined: any = [];
  results: any;
  converted$: Observable<any>;

  impactChart(query: string) {

    switch (query) {
      case 'lostRhinos':
        this.results = this.genericService.getLostRhinos();
        break;
      case 'poacherTracks':
        this.results = this.genericService.poacherTracks();
        break;
      case 'suspectsNeutralised':
        this.results = this.genericService.suspectsNeutralised();
        break;
      default:
        this.results = this.genericService.getLostRhinos();
        break;
    }

    const options: any = {
      chart: {
        type: 'column',
        backgroundColor: 'transparent',
      },
      xAxis: {
        labels: {
          style: {
            color: '#FFFFFF'
          }
        },
        visible: true,
        categories: this.results.map(item => item.year),
      },
      yAxis: {
        visible: false,
      },
      title: {
        text: ''
      },
      legend: {
        reversed: false
      },
      tooltip: {
        enabled: false,
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        column: {
          dataLabels: {
            enabled: true,
            distance: -50,
            style: {
              fontWeight: 'bold',
              color: 'white'
            }
          },
          startAngle: -90,
          endAngle: 90,
          borderRadius: 5,
          center: ['50%', '75%'],
          size: 500
        },
        series: {
          events: {
            click: function(event) {
              console.log(`%c An event has been clicked: ${event}`, 'color: red; font-weight: bold;');
              location.href = 'http://localhost:4200/#/chart-drill-down';
            }
          }
        }
      },
      credits: {
        enabled: false
      },
      series: [
        {
          showInLegend: false,
          name: '2013 - 2017',
          data: this.results.map((item, index) => ({
            x: index,
            y: +item.number,
            name: item.year
          }))
        }
      ]
    };

    return new Chart(options);

  }

  transformData(results): any {
    const lastOne = results.data.slice(Math.max(results.data.length - 2, 1));
    const value = Object.values(lastOne[0]);

    this.provinces = Object.keys(lastOne[0]).map((provinces, index) => ({
      name: provinces,
      infected: value[index],
    }));

    this.provinces.forEach(element => {
      if (element.name.length === 2 || element.name.length === 3) {
        this.combined.push(element);
      }
    });
  }
}
