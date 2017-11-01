import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class DataProvider {


    myData ={
         "listItems":[
            {listName: "buttermilk"},
            {listName: "coconut"},
            {listName: "butt butter"},
            {listName: "milk"}]
    };

    constructor() {
        console.log('Hello DataProvider Provider');
    }

    getData():object {
      return this.myData;
    }
}
