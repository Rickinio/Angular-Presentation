import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import {FormsModule} from '@angular/forms'

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
    ImportantDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'interpolation', component: InterpolationComponent },
      { path: 'prop-binding', component: PropBindingComponent },
      { path: 'event-binding', component: EventBindingComponent },
      { path: 'pipes', component: PipesComponent },
      { path: 'component-interaction', component: ComponentInteractionComponent },
      { path: 'styles', component: StylesComponent },
    ])
  ],
  providers: [DriversService],
  bootstrap: [AppComponent]
})
export class AppModule { }
