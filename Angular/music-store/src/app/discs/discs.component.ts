import { Component, OnInit } from '@angular/core';
import { IDisc } from '../shared/disc';
import { DataService } from '../shared/dataService';

@Component({
  selector: 'app-discs',
  templateUrl: './discs.component.html',
  styleUrls: ['./discs.component.css']
})
export class DiscsComponent implements OnInit {
  private discs:IDisc[] = [];
  private error:string;
  private selectedDisc:IDisc;
  public filter:string;
  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.getDiscs().subscribe(
      discs => this.discs = discs,
      error => this.error = error
    )
  }

  public addItemToCart(disc:IDisc){
    this.dataService.addOrderItem(disc);
  }

  public setSelectedDisc(disc:IDisc){
    this.selectedDisc = disc;
  }

}
