import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FormsModule } from '@angular/forms';

export const firebaseConfig = {
  apiKey: 'AIzaSyCHOPZV3zlsyDTfPrzsp5FfZLmyLdvhK8M',
    authDomain: 'first-5801d.firebaseapp.com',
    databaseURL: 'https://first-5801d.firebaseio.com',
    projectId: 'first-5801d',
    storageBucket: 'first-5801d.appspot.com',
    messagingSenderId: '908049948988'
};

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
