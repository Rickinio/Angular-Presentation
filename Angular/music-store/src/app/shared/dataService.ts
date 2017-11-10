import { Injectable } from "@angular/core";
import { IDisc } from "../shared/disc";
import { Observable } from "rxjs/Observable";

import 'rxjs/add/observable/of';
import { Order, OrderItem } from "./order";

@Injectable()
export class DataService {

    public order: Order = new Order();

    private discs: IDisc[] = [
        {
            id: 1,
            band: "Britney Spears",
            tracks: 11,
            duration: "59:30",
            price: 5,
        },
        {
            id: 2,
            band: "Madonna",
            tracks: 10,
            duration: "55:20",
            price: 6
        }
    ]

    constructor() {

    }

    public getDiscs(){
        return Observable.of(this.discs);
    }

    public saveDisc(disc: IDisc): Observable<IDisc> {
        if (!disc.id) {
            let newDisc = {
                band: disc.band,
                id: 5,
                price: disc.price,
                tracks: disc.tracks,
                duration: disc.duration
            }

            this.discs.push(disc);
            return Observable.of(disc);
        }
        else {
            let d = this.discs.find(function (i) {
                return i.id == disc.id;
            });

            d.band = disc.band;
            d.price = disc.price;
            d.tracks = disc.tracks;
            d.duration = disc.duration;

            return Observable.of(d);
        }
    }

    public getDisc(id: number): Observable<IDisc> {
        let d = this.discs.find(function (i) {
            return i.id == id;
        });

        if (!d) {
            let disc: IDisc = {
                band: "",
                id: 0,
                price: 0,
                tracks: 0,
                duration: ""
            }
            return Observable.of(disc);
        }

        return Observable.of(d);
    }

    public addOrderItem(disc: IDisc) {

        let item = this.order.items.find(function (i) {
            return i.discId == disc.id;
        });

        if (item) {
            item.quantity++;
        }
        else {
            let orderItem: OrderItem = new OrderItem();
            orderItem.discId = disc.id;
            orderItem.price = disc.price;
            orderItem.band = disc.band;
            orderItem.quantity = 1;
            this.order.items.push(orderItem);
        }
    }
}