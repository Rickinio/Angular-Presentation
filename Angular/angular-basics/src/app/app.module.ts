import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropBindingComponent } from './prop-binding/prop-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    PropBindingComponent,
    EventBindingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'interpolation', component: InterpolationComponent },
      { path: 'prop-binding', component: PropBindingComponent },
      { path: 'event-binding', component: EventBindingComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
