import {​​​​​ Component, OnInit }​​​​​ from '@angular/core';
import {​​​​​ SwPush, SwUpdate }​​​​​ from '@angular/service-worker';
import { NewsletterService } from './newsletter.service';
import { MapService } from './map.service';

@Component({​​​​​
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
}​​​​​)
export class AppComponent implements OnInit {
  map;
  readonly VAPID_PUBLIC_KEY = "BAIidyZj45O6wr5W1O2NR9nir_HXR-yBQsRgnm-Z0Un-Gf0wXvUYZ91mpkgplWKVG-IXRAayT-HrKXvTQyRFj9w";
  title = 'tuto-pwa-angular';

  constructor(
    private swPush: SwPush, private mapService: MapService, private ns:NewsletterService, public updates:SwUpdate) {
      this.updates.available.subscribe(event => {
        alert('update available');
      });
    }

    ngOnInit() {
      if (this.mapService.L) {
        this.setupMap();
      }
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

    private setupMap() {
      if (!this.map) {
        this.map = this.mapService.L.map('map').setView([51.505, 2.09], 5);
        this.mapService.L.tileLayer(
          'https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png',
          {
            attribution:
              'copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>,' +
              'creativeNerd Maps',
          }
        ).addTo(this.map);
      }
    }
  }
  