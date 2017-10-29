import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from './user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { IUser } from './user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  pageTitle:string;
  private sub: Subscription;
  userId:number;
  errorMessage:string;
  user:IUser = this.userService.initializeUser();

  @ViewChild('userForm') userForm:NgForm;

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(
      params => {
        let id = +params['id'];
        this.getUser(id);
      }
    )
  }

  getUser(id: number): void {
    this.userService.getUser(id)
      .subscribe(
      (user: IUser) => this.onUserRetrieved(user),
      (error: any) => this.errorMessage = <any>error
      );
  }

  onUserRetrieved(user:IUser){
    this.user = user;

    if(this.user.id == 0){
      this.pageTitle = 'Create User';
    }
    else{
      this.pageTitle = 'Edit User';
    }
  }

  save(userForm: NgForm) {
    console.log(userForm.form);
    console.log('Saved: ' + JSON.stringify(userForm.value));
    if (userForm.dirty && userForm.valid) {
      let u = Object.assign({}, this.user, userForm.valid)
      this.userService.saveUser(u)
        .subscribe(
        () => this.onSaveComplete(),
        (error: any) => this.errorMessage = <any>error
        );
    }
    else if (!userForm.dirty) {
      userForm.reset();
      this.onSaveComplete();
    }
  }

  deleteUser(): void {
    if (this.user.id === 0) {
      // Don't delete, it was never saved.
      this.onSaveComplete();
    } else {
      if (confirm(`Really delete the user: ${this.user.lastName}?`)) {
        this.userService.deleteUser(this.user.id)
          .subscribe(
          () => this.onSaveComplete(),
          (error: any) => this.errorMessage = <any>error
          );
      }
    }
  }

  onSaveComplete(): void {
    this.userForm.reset() //we reset the form because we don't want to activate the UserEditGuard component
    this.router.navigate(['/users']);
  }

}
