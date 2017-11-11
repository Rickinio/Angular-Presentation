import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/dataService';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  constructor(private dataService:DataService) { }

  
}
