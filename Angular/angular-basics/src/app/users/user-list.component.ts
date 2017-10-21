import { Component, OnInit } from '@angular/core';
import {UserService} from './user.service';
import {IUser} from '../template-form/user';

@Component({
  selector: 'app-productList',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  pageTitle: string = 'Users List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  listFilter: string;
  errorMessage: string;

  users: IUser[];

  constructor(private _userService:UserService) {

   }

  ngOnInit() {
    this._userService.getUsers()
    .subscribe(users => this.users = users,
               error => this.errorMessage = <any>error);
  }

  toggleImage(): void {
        this.showImage = !this.showImage;
    }

}
