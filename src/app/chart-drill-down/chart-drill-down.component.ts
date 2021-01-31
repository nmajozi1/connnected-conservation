import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-chart-drill-down',
  templateUrl: './chart-drill-down.component.html',
  styleUrls: ['./chart-drill-down.component.scss']
})
export class ChartDrillDownComponent implements OnInit {

  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute
    ) { }

  ngOnInit() {
    var url_no_hash = window.location.href.replace('/#', '');
    console.log(`%c ${url_no_hash}`, 'color: green; font-weight: red');
    var url = new URL(url_no_hash);
    var category = url.searchParams.get("category");
    console.log(`%c Category ${category} `, 'color: red; font-weight: bold');
  }

}
