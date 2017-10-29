import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserFilterPipe } from './user-filter.pipe';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'users', component: UsersComponent },
    ])
  ],
  declarations: [UsersComponent, UserFilterPipe]
})
export class UsersModule { }
