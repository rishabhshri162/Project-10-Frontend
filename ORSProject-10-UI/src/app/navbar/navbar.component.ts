import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpServiceService } from '../http-service.service';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  constructor(private httpService: HttpServiceService, private router: Router, private servicelocator: ServiceLocatorService) {

  }


 
}