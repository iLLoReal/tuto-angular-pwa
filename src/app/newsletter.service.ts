import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {
  constructor(public _http: HttpClient) { }
    addPushSubscriber(sub:any) {
      return this._http.post('https://www.votrebackendnode.com', sub);
    }
}
