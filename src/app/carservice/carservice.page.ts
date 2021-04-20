import { Component, OnInit } from '@angular/core';
import {KfzServiceService} from '../webService/kfz-service.service'

@Component({
  selector: 'app-carservice',
  templateUrl: './carservice.page.html',
  styleUrls: ['./carservice.page.scss'],
})
export class CarservicePage implements OnInit {

  constructor(private kfzService:KfzServiceService) { }

  ngOnInit() {
    this.kfzService.loadServices();
  }

}
