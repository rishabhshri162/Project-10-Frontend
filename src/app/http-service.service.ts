import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Router } from '@angular/router';

@Injectable()
export class HttpServiceService {
  // for httpClient install HttpClientModule in app.module.ts
  constructor(
    private router: Router,
    private httpClient: HttpClient,
  ) {}

  get(endpoint: any, callback: any) {
    return this.httpClient.get(endpoint).subscribe((data) => {
      console.log('Data :: ' + data);
      callback(data);
    });
  }

  post(endpoint: any, bean: any, callback: any) {
    return this.httpClient.post(endpoint, bean).subscribe(
      (data) => {
        console.log(data);
        callback(data);
      },
      (error) => {
        console.log('ORS Error--', error);
      },
    );
  }
}
