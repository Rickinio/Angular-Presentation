import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  
  private _companies: string[];
  @Output() companyClicked: EventEmitter<string> = new EventEmitter<string>();

  @Input()
  set companies(value:string[]){
    value.forEach((company,index,array)=>{
      if(company.length == 0){
        array[index] = 'Unknown Company';
      }
    });
    this._companies = value;
  }

  get companies(){
    return this._companies
  }

  constructor() { }

  ngOnInit() {
  }

  onCompanyClick(company:string){
    this.companyClicked.emit(company);
  }

  selectYahoo(){
    this.companyClicked.emit("Yahoo");
  }

}
