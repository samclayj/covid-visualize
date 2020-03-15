import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  configUrl = 'http://localhost:3000/config';
  config = null;

  constructor(private http: HttpClient) { }

  async getConfig() {
    // Add retries with backoff + error handling.
    // Also consider typing the response.
    // Only load the config one time.
    if (this.config == null) {
      this.config = await this.http.get(this.configUrl).toPromise();
      console.log(this.config);
    }
    console.log(this.config);
    return Promise.resolve(this.config);
  }
}
