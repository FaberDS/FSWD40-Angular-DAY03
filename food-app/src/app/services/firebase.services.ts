import {Injectable} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import 'rxjs/add/operator/map';

@Injectable()
export class FirebaseService {
    category: FirebaseListObservable<Category[]>;
    food: FirebaseListObservable<Food[]>;
    constructor(private af: AngularFireDatabase) {
    }
    getFoods(category: string = null) {
        if (category !== '0')  {
            this.food = this.af.list('/food', {
                query: {
                    orderByChild: 'category',
                    equalTo: category
                }
            }) as FirebaseListObservable<Food[]>;

        }else {
            this.food = this.af.list('/food') as FirebaseListObservable<Food[]>;
        }
        return this.food;

    }

  getCategories() {
    this.category = this.af.list('/categories') as FirebaseListObservable<Category[]>;
    return this.category ;
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
