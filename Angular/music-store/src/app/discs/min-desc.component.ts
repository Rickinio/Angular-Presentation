import { Component, OnInit, Input } from '@angular/core';
import { IDisc } from '../shared/disc';

@Component({
  selector: 'app-min-desc',
  templateUrl: './min-desc.component.html',
  styleUrls: ['./min-desc.component.css']
})
export class MinDescComponent implements OnInit {
  @Input() disc:IDisc
  constructor() { }

  ngOnInit() {
  }

}
