import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class DriversService {
  drivers: string[] = [];
  selectedDriver:Subject<string> = new Subject<string>();
  selectedDriverStream$ = this.selectedDriver.asObservable();

  addDriver(driver:string){
    this.drivers.push(driver);
  }

  setSelectedDriver(driver:string){
    this.selectedDriver.next(driver);
  }

}
