import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';


import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { IUser } from '../template-form/user';
import { UserData } from './user-api';

@Injectable()
export class UserService {
    private baseUrl = 'http://localhost:4200/api/users';
    private options = { headers: new Headers({ 'Content-Type': 'application/json' })};

    constructor(private http: Http, private _userData:UserData) { }

    getUsers(): Observable<IUser[]> {
        return this.http.get(this.baseUrl)
            .map(this.extractData)
            .do(data => console.log('getUsers: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getUser(id: number): Observable<IUser> {
        if (id === 0) {
        return Observable.of(this.initializeUser());
        // return Observable.create((observer: any) => {
        //     observer.next(this.initializeUser());
        //     observer.complete();
        // });
        };
        const url = `${this.baseUrl}/${id}`;
        return this.http.get(url)
            .map(response => response.json().data as IUser)
            .do(data => console.log('getUser: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    deleteUser(id: number): Observable<Response> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        //letthis.options = new RequestOptions({ headers: headers });

        const url = `${this.baseUrl}/${id}`;
        return this.http.delete(url, this.options)
            .do(data => console.log('deleteUser: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    saveUser(user: IUser): Observable<IUser> {        
        if (user.id === 0) {
            return this.createUser(user);
        }
        return this.updateUser(user);
    }

    private createUser(user: IUser): Observable<IUser> {
        user.id = undefined;
        return this.http.post(this.baseUrl, user, this.options)
            .map(this.extractData)
            .do(data => console.log('createUser: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private updateUser(user: IUser): Observable<IUser> {
        const url = `${this.baseUrl}/${user.id}`;
        return this.http.put(url, user, this.options)
            .map(() => user)
            .do(data => console.log('updateUser: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private extractData(response: any) {
        let body = response.json() || {};
        return body;
    }

    private handleError(error: any): Observable<any> {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.message || 'Server error');
    }

    initializeUser(): IUser {
        // Return an initialized object
        return {
            id: 0,
            firstName:'',
            lastName:'',
            email:'',
            state:'',
            addressType:'home',
            sendCatalog:false
        };
    }
}