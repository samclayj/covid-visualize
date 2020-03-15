import { Injectable } from '@angular/core';
import { ConfigService } from '../config/config.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TimeseriesService {
  loadedConfig: Object;

  constructor(private configService: ConfigService, private http: HttpClient) {
  }

  async getConfig() {
    if (!this.loadedConfig) {
      this.loadedConfig = await this.configService.getConfig();
    }
    return Promise.resolve(this.loadedConfig);
  }

  async getRecoveredSeries() {
    const config = await this.getConfig();
    return this.http.get(config['recoveredSeriesUrl']);
  }

  async getDeathsSeries() {
    const config = await this.getConfig();
    return this.http.get(config['deathsSeriesUrl']);
  }

  async getConfirmedSeries() {
    const config = await this.getConfig();
    return this.http.get(config['confirmedSeriesUrl']);
  }

}
