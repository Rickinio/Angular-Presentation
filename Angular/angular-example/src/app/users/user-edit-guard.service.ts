import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserEditComponent } from './user-edit.component';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserEditGuardService implements CanDeactivate<UserEditComponent> {
  
  canDeactivate(component: UserEditComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    if (component.userForm.dirty) {
      let userName = component.userForm.value.firstName || 'Unknown user';
      return confirm(`Navigate away will cause ${userName} to not be saved?`);
    }
    return true;
  }

  constructor() { }

}
