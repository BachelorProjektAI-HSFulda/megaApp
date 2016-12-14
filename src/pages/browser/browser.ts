import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Favorits } from '../../core/storage/favorits';

import { SynactaAPIService } from '../../core/synacta/api.service';

import { Search } from '../../core/synacta/api.search';

@Component({
  selector: 'page-browser',
  templateUrl: 'browser.html'
})
export class BrowserPage {

  constructor(public navCtrl: NavController, private favList: Favorits, synAPI: SynactaAPIService, finder: Search) {

    console.log(finder.search("0100/xcvcxv"));


  }

}
