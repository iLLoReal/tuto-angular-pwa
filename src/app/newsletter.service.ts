import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {
  constructor(public _http: HttpClient) { }
    addPushSubscriber(sub:any) {
      console.log("Bonjour");
      return this._http.post('https://tuto-pwa-server.herokuapp.com/subscribe', sub);
    }
}
