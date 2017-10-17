import { Injectable } from '@angular/core';
import { Router, CanDeactivate } from '@angular/router';

import { ReactiveFormComponent } from './reactive-form.component';

@Injectable()
export  class UnsavedDataGuard implements CanDeactivate<ReactiveFormComponent> {

    canDeactivate(component: ReactiveFormComponent): boolean {
        if (component.customerForm.dirty) {
            let productName = component.customerForm.get('firstName').value || 'Unknown';
            return confirm(`Navigate away will cause ${productName} to not complete sign up?`);
        }
        return true;
    }
}