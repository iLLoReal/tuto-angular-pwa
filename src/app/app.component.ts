import {​​​​​ Component }​​​​​ from '@angular/core';
import {​​​​​ SwPush, SwUpdate }​​​​​ from '@angular/service-worker';
import { NewsletterService } from './newsletter.service';
import { latLng, tileLayer } from 'leaflet';


@Component({​​​​​
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
}​​​​​)
export class AppComponent {
  readonly VAPID_PUBLIC_KEY = "BAIidyZj45O6wr5W1O2NR9nir_HXR-yBQsRgnm-Z0Un-Gf0wXvUYZ91mpkgplWKVG-IXRAayT-HrKXvTQyRFj9w";
  title = 'tuto-pwa-angular';

  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 5,
    center: latLng(46.879966, -121.726909)
  };

  constructor(
    private swPush: SwPush, private ns:NewsletterService, public updates:SwUpdate) {
      this.updates.available.subscribe(event => {
        alert('update available');
      });
    }
    subscribeToNotifications() {
      this.swPush.requestSubscription({
        serverPublicKey: this.VAPID_PUBLIC_KEY
      })
      .then(sub => this.ns.addPushSubscriber(sub).subscribe( res => {
        console.log(res);
      }))
      .catch(err => console.error("Could not subscribe to notifications", err));
    }
  }
  