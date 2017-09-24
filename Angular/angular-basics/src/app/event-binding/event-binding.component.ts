import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
  superHeroes: string[] = ["Superman", "Batman", "Ironman"];
  showHeroes: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  clicked(): void {
    alert('clicked!!');
  }

  toggleHeroes(): void {
    this.showHeroes = !this.showHeroes;
  }
}
