import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserFilterPipe } from './user-filter.pipe';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryUserApi } from './user-api';
import { UserService } from './user.service';
import { UserEditComponent } from './user-edit/user-edit.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryUserApi),
    RouterModule.forRoot([
      { path: 'users', component: UsersComponent },
    ])
  ],
  declarations: [
    UsersComponent,
    UserFilterPipe,
    UserEditComponent, 
  ],
  providers: [InMemoryUserApi,UserService]
})
export class UsersModule { }
