import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class DataProvider {


    myData ={
        "listItems":[
            { "header":"B", "items":[{"listName": "buttermilk"},{"listName": "butt butter"}] },
            { "header":"C", "items":[{"listName": "coconut"}] },
            { "header":"M", "items":[{"listName": "milk"}] }
        ]

    };

    constructor() {
        console.log('Hello DataProvider Provider');
    }

    getData():object {
      return this.myData;
    }
}
