import {​​​​​ Component }​​​​​ from '@angular/core';
import {​​​​​ SwPush }​​​​​ from '@angular/service-worker';
@Component({​​​​​
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
}​​​​​)
export class AppComponent {​​​​​
  readonly VAPID_PUBLIC_KEY = "BAIidyZj45O6wr5W1O2NR9nir_HXR-yBQsRgnm-Z0Un-Gf0wXvUYZ91mpkgplWKVG-IXRAayT-HrKXvTQyRFj9w";
  title = 'ngseo';
  constructor(
    private swPush: SwPush) {​​​​​}​​​​​
    subscribeToNotifications() {​​​​​
      this.swPush.requestSubscription({​​​​​
        serverPublicKey: this.VAPID_PUBLIC_KEY
      }​​​​​)
      .then(sub => console.log("[This is the sub we are looking for] : " + sub))
      .catch(err => console.error("Could not subscribe to notifications", err));
    }​​​​​
  }​​​​​
  