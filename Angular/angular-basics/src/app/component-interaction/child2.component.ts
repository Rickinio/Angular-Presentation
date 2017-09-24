import { Component, OnInit } from '@angular/core';
import { DriversService } from '../shared/drivers.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  constructor(private _driversService:DriversService) {

   }

  ngOnInit() {
  }

  setSelectedDriver(driver:string){
    this._driversService.setSelectedDriver(driver);
  }
}
