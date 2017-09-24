import { Component, OnInit, ViewChild, Input, OnDestroy } from '@angular/core';
import { ChildComponent } from './child.component';
import { DriversService } from '../shared/drivers.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-component-interaction',
  templateUrl: './component-interaction.component.html',
  styleUrls: ['./component-interaction.component.css'],
  //providers:[DriversService]
})
export class ComponentInteractionComponent implements OnInit,OnDestroy {  
  companies: string[] = ["Microsoft", "", "Google", "Facebook", "Apple"];
  selectedCompany: string;

  selectedDriver: string = "McQueen";
  driveSubscription:Subscription;

  @ViewChild(ChildComponent)
  private childComponent: ChildComponent;

  constructor(private _driversService: DriversService) {
    this.driveSubscription = this._driversService.selectedDriverStream$
      .subscribe(
          driver => this.selectedDriver = driver
      );
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.driveSubscription.unsubscribe();
  }
  

  setSelectedCompany(company: string): void {
    this.selectedCompany = company;
  }

  setYahooCompany(): void {
    this.childComponent.selectYahoo();
  }

  addDriver(): void {
    this._driversService.addDriver(this.selectedDriver);
  }
}
