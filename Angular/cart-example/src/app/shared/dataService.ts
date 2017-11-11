import { Injectable } from "@angular/core";
import { IDisc } from "./disc";
import { Observable } from "rxjs/Observable";

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { Order, OrderItem } from "./order";
import { Http } from "@angular/http";
import { IUser } from "./user";
import { IPost } from "./post";
import { Response } from "@angular/http";

@Injectable()
export class DataService {
    discs:IDisc[] = [
        {
          band: "Paola",
          id: 1,
          duration: "60",
          price: 23,
          tracks: 10
        },
        {
          band: "Ploutarxos",
          id: 2,
          duration: "58:20",
          price: 15,
          tracks: 15
        }
      ];

    public order:Order = new Order();

    constructor(private http:Http){

    }

    public getNamesFromApi(method:Function):Observable<IUser[]>{
       return this.http.get('https://jsonplaceholder.typicode.com/users')
        .map( resp => method(resp))
        .do(data => console.log('users: ' + JSON.stringify(data)))
        .catch(err => err);
    }

    public saveNewPost():Observable<IUser[]>{
        let post:IPost = {
            body:"This is a test Post",
            id:undefined,
            title:"This is a title",
            userId:1
        };
        return this.http.post('https://jsonplaceholder.typicode.com/posts',post)
         .map(resp => resp.json())
         .do(data => console.log('New Post: ' + JSON.stringify(data)))
         .catch(err => err);
     }

    public saveDisc(disc:IDisc):Observable<IDisc>{
        let d = this.discs.find(function(item){
            return item.id == disc.id;
        })
        if(d){
            d.band = disc.band;
            d.duration = disc.duration;
            d.price = disc.price;
            d.tracks = disc.tracks;

            return Observable.of(d);
        }
        else{
            this.discs.push(disc);

            return Observable.of(disc);
        }        
    }

    public getDisc(id:number):Observable<IDisc>{
        let disc = this.discs.find(function(item){
            return item.id == id;
        })

        return Observable.of(disc);
    }
    public addOrderItem(disc:IDisc){
        const i = this.order.items.find(function(item){
            return item.discId == disc.id;
        })
        if(i){
            i.quantity++;
        }
        else{
            let orderItem:OrderItem = {
                band:disc.band,
                price:disc.price,
                discId:disc.id,
                quantity:1
            }
            this.order.items.push(orderItem)
        }
    }

    public getDiscs():Observable<IDisc[]>{
        return Observable.of(this.discs);
    }
}