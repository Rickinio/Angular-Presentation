import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {
  componentProperty: string = "Hello from component";

  constructor() { }


  ngOnInit() {
  }

  calcDouble(n: number): number {
    return n * 2;
  }

}
