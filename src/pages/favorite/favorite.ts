import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { StorageTest } from '../../core/synacta/api.storage.ts';

@Component({
  selector: 'page-favorite',
  templateUrl: 'favorite.html'
})
export class FavoritePage {

  constructor(public navCtrl: NavController, storage: StorageTest) {
	
document.write(storage.getFav() + "<br \>");
  }
  
}
