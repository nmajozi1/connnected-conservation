import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { retry, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import * as Papa from 'papaparse';

interface IImpact {
  year: string;
  number: number;
}

@Injectable({
  providedIn: 'root'
})
export class GenericService {

  cumulativeUrl = 'https://raw.githubusercontent.com/dsfsi/covid19za/master/data/covid19za_provincial_cumulative_timeline_confirmed.csv';
  confirmedUrl = 'https://raw.githubusercontent.com/dsfsi/covid19za/master/data/covid19za_timeline_confirmed.csv';
  deathsUrl = 'https://raw.githubusercontent.com/dsfsi/covid19za/master/data/covid19za_timeline_deaths.csv';
  testingCumulativeUrl = 'https://raw.githubusercontent.com/dsfsi/covid19za/master/data/covid19za_timeline_testing.csv';
  testingProvincialUrl
  = 'https://raw.githubusercontent.com/dsfsi/covid19za/master/data/covid19za_provincial_cumulative_timeline_testing.csv';
  headers = new HttpHeaders();

  constructor(private http: HttpClient) { }

  fetchCovidData(): Observable<any> {
      this.headers = new HttpHeaders();

      const options: {
        headers?: HttpHeaders;
        responseType: 'text';
      } = {
        responseType: 'text'
      };

      return this.http.get(this.cumulativeUrl, options).pipe(map(results => {
        return Papa.parse(results, { header: true, });
      }));
  }

  fetchDeathData(): Observable<any> {
    this.headers = new HttpHeaders();

    const options: {
      headers?: HttpHeaders;
      responseType: 'text'
    } = {
      responseType: 'text'
    };

    return this.http.get(this.confirmedUrl, options).pipe(map(results => {
      return Papa.parse(results, { header: true, });
    }));
  }

  fetchTestData(): Observable<any> {
    this.headers = new HttpHeaders();

    const options: {
      headers?: HttpHeaders;
      responseType: 'text'
    } = {
      responseType: 'text'
    };

    return this.http.get(this.testingCumulativeUrl, options).pipe(map(results => {
      return Papa.parse(results, { header: true, });
    }));
  }

  getLostRhinos(): IImpact[] {

    const lostRhino = [
      { year: '2013', number: 50 },
      { year: '2014', number: 15 },
      { year: '2015', number: 19 },
      { year: '2016', number: 2 },
      { year: '2017', number: 0 },
    ];

    return lostRhino;

  }

  poacherTracks(): IImpact[] {

    const lostRhino = [
      { year: '2013', number: 30 },
      { year: '2014', number: 55 },
      { year: '2015', number: 80 },
      { year: '2016', number: 25 },
      { year: '2017', number: 1 },
    ];

    return lostRhino;

  }

  suspectsNeutralised(): IImpact[] {

    const lostRhino = [
      { year: '2013', number: 3 },
      { year: '2014', number: 9 },
      { year: '2015', number: 9 },
      { year: '2016', number: 22 },
      { year: '2017', number: 0 },
    ];

    return lostRhino;

  }

}
