import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import {IUser} from '../template-form/user';
import { Observable } from 'rxjs/Observable';
import { UserService } from './user.service';


@Injectable()
export class UserResolver implements Resolve<IUser>{

    constructor(private _userSerivice:UserService){
        
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): IUser | Observable<IUser> | Promise<IUser> {
        return this._userSerivice.getUser(route.params.id);
    }

}