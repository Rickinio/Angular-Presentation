import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

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
import { HeroListComponent } from './heroes/hero-list.component';
import { HeroData } from './heroes/hero-api';
import { HeroService } from './heroes/hero.service';
import { HeroFilterPipe } from './heroes/hero-filter.pipe';
import { HeroDetailsComponent } from './heroes/hero-details.component';
import { HeroResolver } from './heroes/hero.resolver';
import { TemplateFormComponent } from './template-form/template-form.component';

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
    HeroListComponent,
    HeroFilterPipe,
    HeroDetailsComponent,
    TemplateFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(HeroData),
    RouterModule.forRoot([
      { path: 'interpolation', component: InterpolationComponent },
      { path: 'prop-binding', component: PropBindingComponent },
      { path: 'event-binding', component: EventBindingComponent },
      { path: 'pipes', component: PipesComponent },
      { path: 'component-interaction', component: ComponentInteractionComponent },
      { path: 'styles', component: StylesComponent },
      { path: 'heroes', component: HeroListComponent },
      { path: 'heroDetails/:id', component: HeroDetailsComponent },
      //{ path: 'heroDetails/:id', component: HeroDetailsComponent, resolve: { hero: HeroResolver } },
      { path: 'templateForm', component: TemplateFormComponent }
    ])
  ],
  providers: [DriversService, HeroService, HeroResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
