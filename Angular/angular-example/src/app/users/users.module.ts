import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; //we need this in order to set the ngModel


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'users', component: UsersComponent },
    ])
  ],
  declarations: [UsersComponent]
})
export class UsersModule { }
