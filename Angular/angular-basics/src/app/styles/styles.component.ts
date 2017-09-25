import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-styles',
  templateUrl: './styles.component.html',
  styleUrls: ['./styles.component.css'],
  //styles:['h1{color:red;}','p{color:blue;font-size:15px;}',':host{border: 5px solid purple;padding: 20px;display: block;}'],
  encapsulation: ViewEncapsulation.Native
})
export class StylesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
