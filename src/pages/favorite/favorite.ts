import { Component, OnInit } from '@angular/core';

import { NavController, AlertController, ModalController } from 'ionic-angular';

import { Favorits } from '../../core/storage/favorits';

import { BrowserPage } from '../browser/browser';

import { Entity, Container } from '../../core/synacta/api.objects';

import { SettingsService} from '../../core/settings/settings.service';

import { MetadataPage } from '../metadata/metadata';

const DATA_STATUS_LOADING: string = "Daten werden geladen...";
const DATA_STATUS_FAILED: string = "Daten konnten nicht geladen werden!";

@Component({
  selector: 'page-favorite',
  templateUrl: 'favorite.html'
})
export class FavoritePage implements OnInit {
  listOfFav;
  dataStatusMessage;

  constructor(public navCtrl: NavController, private favList: Favorits, private modalCtrl: ModalController, public alertCtrl: AlertController,private settings: SettingsService) {
    this.dataStatusMessage = DATA_STATUS_LOADING;
    this.favList.loadEntitys();
  }

  ngOnInit():void{
    this.listOfFav = this.favList.favEntitys;
  }
  public toBrowser(item: Entity): void {
    this.settings.vault.view = false;
    this.settings.save();
    this.navCtrl.push(BrowserPage, item);
  }

  public rem(item: Container): void{
	  this.favList.removeFav(item);
    //obj.defavor();
	  //this.favList.remAlert(this.alertCtrl);
  }

  public displayMetadata(item: Entity) {
    let modal = this.modalCtrl.create(MetadataPage, {datenVon: item});
    modal.present();
  }
}
