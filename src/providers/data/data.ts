import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class DataProvider {


    myData ={
        "listItems":[
            { "header":"B", "items":[{"listName": "B Gata H K "},{"listName": "Bleach"}] },
            { "header":"C", "items":[{"listName": "Campione!"}] },
            { "header":"M", "items":[{"listName": "Machine Doll wa Kizutsukanai"}] }
        ]

    };

    constructor() {
        console.log('Hello DataProvider Provider');
    }

    getData():object {
      return this.myData;
    }
}
