import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { IHero } from './hero';

@Injectable()
export class HeroService {
    private baseUrl = 'api/heroes';

    constructor(private http: Http) { }

    getHeroes(): Observable<IHero[]> {
        return this.http.get(this.baseUrl)
            .map(this.extractData)
            .do(data => console.log('getHeroes: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getHero(id: number): Observable<IHero> {
        if (id === 0) {
        return Observable.of(this.initializeProduct());
        // return Observable.create((observer: any) => {
        //     observer.next(this.initializeProduct());
        //     observer.complete();
        // });
        };
        const url = `${this.baseUrl}/${id}`;
        return this.http.get(url)
            .map(this.extractData)
            .do(data => console.log('getHero: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    deleteHero(id: number): Observable<Response> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        const url = `${this.baseUrl}/${id}`;
        return this.http.delete(url, options)
            .do(data => console.log('deleteHero: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    saveHero(hero: IHero): Observable<IHero> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        if (hero.id === 0) {
            return this.createHero(hero, options);
        }
        return this.updateHero(hero, options);
    }

    private createHero(hero: IHero, options: RequestOptions): Observable<IHero> {
        hero.id = undefined;
        return this.http.post(this.baseUrl, hero, options)
            .map(this.extractData)
            .do(data => console.log('createHero: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private updateHero(hero: IHero, options: RequestOptions): Observable<IHero> {
        const url = `${this.baseUrl}/${hero.id}`;
        return this.http.put(url, hero, options)
            .map(() => hero)
            .do(data => console.log('updateHero: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private extractData(response: Response) {
        let body = response.json();
        return body.data || {};
    }

    private handleError(error: Response): Observable<any> {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

    initializeProduct(): IHero {
        // Return an initialized object
        return {
            id: 0,
            name:null,
            strength:null,
            imageUrl: null
        };
    }
}