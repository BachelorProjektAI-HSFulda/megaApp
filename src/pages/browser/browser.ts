import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Favorits } from '../../core/storage/favorits';

@Component({
  selector: 'page-browser',
  templateUrl: 'browser.html'
})
export class BrowserPage {

  constructor(public navCtrl: NavController, private favList: Favorits) {
    favList.addTest("Vorgang", "32fae6ab-4ab1-48cc-8292-5fbf39258345");
    favList.addTest("Vorgang", "6b35df93-9e11-4796-b627-27e2abf0f3bd");
  }

}
