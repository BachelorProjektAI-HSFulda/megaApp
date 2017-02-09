import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';

// MockBackend
import { MockBackendService } from '../core/mockbackend/mockbackend.service';

@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  providers: [MockBackendService]
})
export class MyApp {
  // default homepage
  rootPage = TabsPage;

  constructor(platform: Platform, private mockBackendService: MockBackendService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.mockBackendService.start(); // Only for Testing purposes
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  ngOnInit() {
  }
}
