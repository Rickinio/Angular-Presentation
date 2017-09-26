import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import {IHero} from './hero';
import { Observable } from 'rxjs/Observable';
import { HeroService } from './hero.service';


@Injectable()
export class HeroResolver implements Resolve<IHero>{

    constructor(private _heroSerivice:HeroService){
        
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): IHero | Observable<IHero> | Promise<IHero> {
        return this._heroSerivice.getHero(route.params.id);
    }

}