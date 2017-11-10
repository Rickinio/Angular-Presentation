import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { DiscsComponent } from './discs/discs.component';
import { CartComponent } from './cart/cart.component';
import { DataService } from './shared/dataService';
import { ShopComponent } from './shop/shop.component';
import { DiscDetailsComponent } from './discs/disc-details.component';
import { MinDescComponent } from './discs/min-desc.component';
import { DiscFilterPipe } from './discs/disc-filter.pipe';

let routes: Route[] = [
  { path: '', redirectTo: '/shop', pathMatch: 'full' },
  { path: 'shop', component: ShopComponent },
  { path: 'editDisc/:id', component: DiscDetailsComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    DiscsComponent,
    CartComponent,
    ShopComponent,
    DiscDetailsComponent,
    MinDescComponent,
    DiscFilterPipe,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
