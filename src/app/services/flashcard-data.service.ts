import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class FlashcardDataService {

  result:any;

  constructor(private _http: Http) { }

  getDecks() {
    return this._http.get("/api/decks")
      .map(result => this.result = result.json());
  }

}