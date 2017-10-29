import { Component, OnInit } from '@angular/core';
import { IUser } from './user';
import { NgForm } from '@angular/forms';
import { UserService } from '../users/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  pageTitle: string;
  user: IUser = this._userService.initializeUser();
  errorMessage: string;
  private sub: Subscription;

  constructor(private _userService: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(
      params => {
        let id = +params['id'];
        this.getUser(id);
      }
    );
  }

  getUser(id: number): void {
    this._userService.getUser(id)
      .subscribe(
      (user: IUser) => this.onUserRetrieved(user),
      (error: any) => this.errorMessage = <any>error
      );
  }

  onUserRetrieved(user: IUser): void {

    this.user = user;

    if (this.user.id === 0) {
      this.pageTitle = 'Add User';
    } else {
      this.pageTitle = `Edit: ${this.user.lastName}`;
    }
  }

  deleteUser(): void {
    if (this.user.id === 0) {
      // Don't delete, it was never saved.
      this.onSaveComplete();
    } else {
      if (confirm(`Really delete the user: ${this.user.lastName}?`)) {
        this._userService.deleteUser(this.user.id)
          .subscribe(
          () => this.onSaveComplete(),
          (error: any) => this.errorMessage = <any>error
          );
      }
    }
  }

  save(userForm: NgForm) {
    console.log(userForm.form);
    console.log('Saved: ' + JSON.stringify(userForm.value));
    if (userForm.dirty && userForm.valid) {
      let u = Object.assign({}, this.user, userForm.valid)
      this._userService.saveUser(u)
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

  onSaveComplete(): void {
    this.router.navigate(['/users']);
  }

}
