import { Component, OnInit } from '@angular/core';
import { ValidatorFn, AbstractControl, FormArray, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IUser } from '../template-form/user';

import 'rxjs/add/operator/debounceTime';
import { Router } from '@angular/router';
import { UserService } from '../users/user.service';

function emailMatcher(c: AbstractControl): {[key: string]: boolean} | null {
  let emailControl = c.get('email');
  let confirmControl = c.get('confirmEmail');

  if (emailControl.pristine || confirmControl.pristine) {
    return null;
  }

  if (emailControl.value === confirmControl.value) {
      return null;
  }
  return { 'match': true };
}

function ratingRange(min: number, max: number): ValidatorFn {
  return  (c: AbstractControl): {[key: string]: boolean} | null => {
      if (c.value !== undefined && (isNaN(c.value) || c.value < min || c.value > max)) {
          return { 'range': true };
      };
      return null;
  };
}

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  userForm: FormGroup;
  customer: IUser = this._userService.initializeUser();
  emailMessage: string;

  get addresses(): FormArray{
      return <FormArray>this.userForm.get('addresses');
  }

  private validationMessages = {
      required: 'Please enter your email address.',
      pattern: 'Please enter a valid email address.'
  };

  constructor(private fb: FormBuilder,private router:Router, private _userService:UserService) { }

  ngOnInit(): void {
      this.userForm = this.fb.group({
          firstName: ['', [Validators.required, Validators.minLength(3)]],
          lastName: ['', [Validators.required, Validators.maxLength(50)]],
          emailGroup: this.fb.group({
              email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+')]],
              confirmEmail: ['', Validators.required],
          }, {validator: emailMatcher}),
          phone: '',
          notification: 'email',
          rating: ['', ratingRange(1, 5)],
          sendCatalog: true,
          addresses: this.fb.array([this.buildAddress()])
      });

      this.userForm.get('notification').valueChanges
                       .subscribe(value => this.setNotification(value));

      const emailControl = this.userForm.get('emailGroup.email');
      emailControl.valueChanges.debounceTime(1000).subscribe(value =>
          this.setMessage(emailControl));
  }

  addAddress(): void {
      this.addresses.push(this.buildAddress());
  }

  buildAddress(): FormGroup {
      return this.fb.group({
              addressType: 'home',
              street1: '',
              street2: '',
              city: '',
              state: '',
              zip: ''
      });
  }

  populateTestData(): void {
    //When we want to set just a few of the properties of the object we use patchValue
    //If we use setValue we need to set ALL the VALUES else there is an error in console.
      this.userForm.patchValue({
          firstName: 'Pamela',
          lastName: 'Anderson',
          emailGroup: {email: 'pamela@magazine.com', confirmEmail: 'pamela@magazine.com'}
      });
  }

  save(): void {
      console.log('Saved: ' + JSON.stringify(this.userForm.value));
      //this.userForm.reset();
      //this.router.navigate(['/users']);
  }

  setMessage(c: AbstractControl): void {
      this.emailMessage = '';
      if ((c.touched || c.dirty) && c.errors) {
          this.emailMessage = Object.keys(c.errors).map(key =>
              this.validationMessages[key]).join(' ');
      }
  }

  setNotification(notifyVia: string): void {
      const phoneControl = this.userForm.get('phone');
      if (notifyVia === 'text') {
          phoneControl.setValidators(Validators.required);
      } else {
          phoneControl.clearValidators();
      }
      phoneControl.updateValueAndValidity();
  }

}
