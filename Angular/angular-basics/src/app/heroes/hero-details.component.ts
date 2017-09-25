import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { HeroService } from './hero.service';
import { IHero } from './hero';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit, OnDestroy {

  private routeSub: Subscription;
  heroId: number;
  hero: IHero;
  errorMessage: string;

  constructor(private _heroService: HeroService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router) {
    this.heroId = +this._activatedRoute.snapshot.paramMap.get('id');
    this.getHero(this.heroId);
  }

  ngOnInit() {
    this.routeSub = this._activatedRoute.params.subscribe(
      params => {
        this.heroId = +params['id'];
        this.getHero(this.heroId);
      }
    );
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }

  getHero(id: number) {
    this._heroService.getHero(id).subscribe(
      hero => this.hero = hero,
      error => this.errorMessage = <any>error);
  }

  onBack(): void {
    this._router.navigate(['/heroes']);
  }

  onNext(): void {
    this._router.navigate(['/heroDetails', this.heroId++]);
  }

}
