import { Component, OnInit } from '@angular/core';
import { IUser } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  pageTitle = "User's List"
  searchValue: string;
  errorMessage: string = '';
  users: IUser[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    // this.users = [
    //   {
    //     id: 0,
    //     firstName: 'John',
    //     lastName: 'Travolta',
    //     email: 'john@movies.com',
    //     sendCatalog: false,
    //     addressType: 'home',
    //     state: 'CA'
    //   },
    //   {
    //     id: 1,
    //     firstName: 'Iron',
    //     lastName: 'Mike',
    //     email: 'iron@boxing.com',
    //     sendCatalog: false,
    //     addressType: 'home',
    //     state: 'CA'
    //   }
    // ];
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers()
      .subscribe(
      (users: IUser[]) => this.users = users,
      (error: any) => this.errorMessage = <any>error
      );
  }

}
