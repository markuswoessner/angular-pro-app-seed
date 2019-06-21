import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { Store } from 'store';

// feature modules
import { AuthModule } from '../auth/auth.module';

// containers
import { AppComponent } from './containers/app/app.component';

// components

// routes
export const ROUTES: Routes = [];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    AuthModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    Store
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}

/*
  var firebaseConfig = {
    apiKey: "AIzaSyAjo0ymj5Ovn4dgmxfbVxJ6hFIm9OXwwok",
    authDomain: "fitness-app-65a7e.firebaseapp.com",
    databaseURL: "https://fitness-app-65a7e.firebaseio.com",
    projectId: "fitness-app-65a7e",
    storageBucket: "fitness-app-65a7e.appspot.com",
    messagingSenderId: "47722797688",
    appId: "1:47722797688:web:3b4dfdf2d373e943"
  };
*/
