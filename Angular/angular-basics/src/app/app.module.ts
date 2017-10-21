import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpInMemoryWebApiModule  } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropBindingComponent } from './prop-binding/prop-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { MultiplyAmountPipe } from './shared/multiply-amount.pipe';
import { PipesComponent } from './pipes/pipes.component';
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';
import { ChildComponent } from './component-interaction/child.component';
import { DriversService } from './shared/drivers.service';
import { Child2Component } from './component-interaction/child2.component';
import { StylesComponent } from './styles/styles.component';
import { ImportantDirective } from './shared/important.directive';
import { UserListComponent } from './users/user-list.component';
import { UserData } from './users/user-api';
import { UserService } from './users/user.service';
import { UserFilterPipe } from './users/user-filter.pipe';
import { UserDetailsComponent } from './users/user-details.component';
import { UserResolver } from './users/user.resolver';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { UnsavedDataGuard } from './reactive-form/unsaved-data-guard-service';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    PropBindingComponent,
    EventBindingComponent,
    MultiplyAmountPipe,
    PipesComponent,
    ComponentInteractionComponent,
    ChildComponent,
    Child2Component,
    StylesComponent,
    ImportantDirective,
    UserListComponent,
    UserFilterPipe,
    UserDetailsComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpInMemoryWebApiModule.forRoot(UserData),
    FormsModule,
    ReactiveFormsModule,    
    RouterModule.forRoot([
      { path: 'interpolation', component: InterpolationComponent },
      { path: 'prop-binding', component: PropBindingComponent },
      { path: 'event-binding', component: EventBindingComponent },
      { path: 'pipes', component: PipesComponent },
      { path: 'component-interaction', component: ComponentInteractionComponent },
      { path: 'styles', component: StylesComponent },
      { path: 'users', component: UserListComponent },
      { path: 'userDetails/:id', component: UserDetailsComponent },
      //{ path: 'userDetails/:id', component: UserDetailsComponent, resolve: { hero: UserResolver } },
      { path: 'templateForm', component: TemplateFormComponent },
      { path: 'reactiveForm', component: ReactiveFormComponent, canDeactivate: [UnsavedDataGuard] }
    ])
  ],
  providers: [DriversService, UserService, UserResolver, UnsavedDataGuard,UserData],
  bootstrap: [AppComponent]
})
export class AppModule { }
