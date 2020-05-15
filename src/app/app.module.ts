import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BookingListComponent } from './booking-list/booking-list.component';

const routes: Routes = [
  { path: 'first-component', component: BookingListComponent },
  { path: '',   redirectTo: '/booking-list', pathMatch: 'full' }
];

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, BookingListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
