import { Component, OnInit, Input } from '@angular/core';
import { IDisc } from '../shared/disc';

@Component({
  selector: 'app-mini-desc',
  templateUrl: './mini-desc.component.html',
  styleUrls: ['./mini-desc.component.css']
})
export class MiniDescComponent implements OnInit {
  @Input() disc:IDisc;
  constructor() { }

  ngOnInit() {
  }

}
