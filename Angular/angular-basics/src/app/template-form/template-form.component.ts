import { Component, OnInit } from '@angular/core';
import { IUser } from './user';
import { NgForm } from '@angular/forms';
import { UserService } from '../users/user.service';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  constructor(private _userService:UserService) { }

  ngOnInit() {
  }
  
  user: IUser= this._userService.initializeUser();
  
      save(userForm: NgForm) {
          console.log(userForm.form);
          console.log('Saved: ' + JSON.stringify(userForm.value));
          userForm.value.id = 0;
          this._userService.saveUser(userForm.value);
      }

}
