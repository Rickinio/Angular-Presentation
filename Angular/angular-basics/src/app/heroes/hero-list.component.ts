import { Component, OnInit } from '@angular/core';
import {HeroService} from './hero.service';
import {IHero} from './hero';

@Component({
  selector: 'app-productList',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  pageTitle: string = 'Heroes List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  listFilter: string;
  errorMessage: string;

  heroes: IHero[];

  constructor(private _heroService:HeroService) {

   }

  ngOnInit() {
    this._heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes,
               error => this.errorMessage = <any>error);
  }

  toggleImage(): void {
        this.showImage = !this.showImage;
    }

}
