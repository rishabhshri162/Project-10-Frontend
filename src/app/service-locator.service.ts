import { Injectable } from '@angular/core';
import { HttpServiceService } from './http-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { EndpointServiceService } from './endpoint-service.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceLocatorService {

   
  httpService;

  router;
  endpoints;

  constructor(private hs: HttpServiceService, private r: Router, private ep: EndpointServiceService) {
    this.httpService = hs;
    this.router = r;
    this.endpoints = ep;
  }
 
  /**
   * get path variable from url
   * 
   * @param route 
   * @param callback 
   */
  getPathVariable(route: ActivatedRoute, callback:any) {             
    route.params.subscribe(params => {
      callback(params)
    });
  }

  /**
   * Forward to page 
   * 
   * @param page 
   */
  forward(page:any){
    this.router.navigateByUrl(page);
  }
}
