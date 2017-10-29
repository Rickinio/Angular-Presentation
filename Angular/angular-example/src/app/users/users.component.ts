import { Component, OnInit } from '@angular/core';
import { IUser } from './user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  pageTitle = "User's List"
  searchValue: string;
  users: IUser[] = [];

  constructor() { }

  ngOnInit() {
    let userA: IUser = <IUser>{
      id: 0,
      firstName: 'John',
      lastName: 'Travolta',
      email: 'john@movies.com',
      sendCatalog: false,
      addressType: 'home',
    };
    let userB: IUser = <IUser>{
      id: 1,
      firstName: 'Iron',
      lastName: 'Mike',
      email: 'iron@boxing.com',
      sendCatalog: false,
      addressType: 'home',
    };

    this.users = [userA,userB];
    
  }

}
