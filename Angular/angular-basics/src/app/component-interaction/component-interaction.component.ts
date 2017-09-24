import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from './child.component'

@Component({
  selector: 'app-component-interaction',
  templateUrl: './component-interaction.component.html',
  styleUrls: ['./component-interaction.component.css']
})
export class ComponentInteractionComponent implements OnInit {
  companies: string[] = ["Microsoft", "", "Google", "Facebook", "Apple"];
  selectedCompany: string;

  @ViewChild(ChildComponent)
  private childComponent: ChildComponent;

  constructor() { }

  ngOnInit() {
  }

  setSelectedCompany(company: string): void {
    this.selectedCompany = company;
  }

  setYahooCompany() {
    this.childComponent.selectYahoo();
  }

}
