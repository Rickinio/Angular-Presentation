import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  superHero:string = "Batman";
  amounts:number[] = [10,30,50];
  constructor() { }

  ngOnInit() {
  }

}
