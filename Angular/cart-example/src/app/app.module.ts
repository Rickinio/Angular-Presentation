import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DiscsComponent } from './discs/discs.component';
import { MiniDescComponent } from './discs/mini-desc.component';
import { DataService } from './shared/dataService';
import { CartComponent } from './cart/cart.component';
import { FilterPipePipe } from './discs/filter-pipe.pipe';
import { FormsModule } from '@angular/forms';
import { Router, Route, RouterModule } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { EditDiscComponent } from './discs/edit-disc.component';
import { HttpModule } from '@angular/http';

let routes: Route[] = [
  { path: '', redirectTo: '/shop', pathMatch: 'full' },
  { path: 'shop', component: ShopComponent },
  { path: 'editDisc/:id', component: EditDiscComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    DiscsComponent,
    MiniDescComponent,
    CartComponent,
    FilterPipePipe,
    ShopComponent,
    EditDiscComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
