import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  configUrl = 'http://localhost:5000/config/config.json';

  constructor(private http: HttpClient) { }

  getConfig() {
    // Add retries with backoff + error handling.
    // Also consider typing the response.
    return this.http.get(this.configUrl);
  }
}
