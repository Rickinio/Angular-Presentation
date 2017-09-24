import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropBindingComponent } from './prop-binding/prop-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { MultiplyAmountPipe } from './shared/multiply-amount.pipe';
import { PipesComponent } from './pipes/pipes.component';
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';
import { ChildComponent } from './component-interaction/child.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    PropBindingComponent,
    EventBindingComponent,
    MultiplyAmountPipe,
    PipesComponent,
    ComponentInteractionComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'interpolation', component: InterpolationComponent },
      { path: 'prop-binding', component: PropBindingComponent },
      { path: 'event-binding', component: EventBindingComponent },
      { path: 'pipes', component: PipesComponent },
      { path: 'component-interaction', component: ComponentInteractionComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
