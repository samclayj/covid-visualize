import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { TimeseriesService } from '../series/timeseries.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private timeSeriesService: TimeseriesService) {}

  ngOnInit() {
    this.getTimeSeries();
  }

  async getTimeSeries() {
    const confirmedSeriesObserver = await this.timeSeriesService.getConfirmedSeries();
    const deathsSeriesObserver = await this.timeSeriesService.getDeathsSeries();
    const recoveredSeriesObserver = await this.timeSeriesService.getRecoveredSeries();

    confirmedSeriesObserver.subscribe((data) => {
      console.log(data);
    });

    deathsSeriesObserver.subscribe((data) => {
      console.log(data);
    });

    recoveredSeriesObserver.subscribe((data) => {
      console.log(data);
    });
  }

}
