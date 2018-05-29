import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { FirebaseService } from './services/firebase.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FirebaseService]
})
export class AppComponent implements OnInit {
  food: Food[];
  appState: string;
  category: Category[];
  activeKey: string;

  constructor(private _firebaseService: FirebaseService) {

  }

  ngOnInit() {
    // let a: string = (<HTMLInputElement>document.getElementById('select')).value;
    // a = '0';
    this.appState = 'default';
    this._firebaseService.getFoods().subscribe(food => {
      this.food = food;
    });

    this._firebaseService.getCategories().subscribe(category => {
      this.category = category;
    });

  }

filterCategory(category) {
  this._firebaseService.getFoods(category).subscribe(food => {
    this.food = food;
  });
}

  changeState(state, key = null) {

    if (key) {

      this.activeKey = key;

    }

    this.appState = state;

  }
}

export interface Food {
  $key?: string;
  name?: string;
  description?: string;
  category: string;
  vitamine: string;
  img: string;
}
export interface Category {
  $key?: string;
  name?: string;
}
