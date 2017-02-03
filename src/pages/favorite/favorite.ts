import { Component, OnInit } from '@angular/core';

import { NavController, AlertController } from 'ionic-angular';

import { Favorits } from '../../core/storage/favorits';

import { BrowserPage } from '../browser/browser';

import { Entity, Container } from '../../core/synacta/api.objects';

import { SettingsService} from '../../core/settings/settings.service';

@Component({
  selector: 'page-favorite',
  templateUrl: 'favorite.html'
})
export class FavoritePage implements OnInit {
  listOfFav;
  constructor(public navCtrl: NavController, private favList: Favorits, public alertCtrl: AlertController,private settings: SettingsService) {

    //initialize the favEntitys Array from favList
    console.log(favList.loadEntitys());

  }

  ngOnInit():void{
    //init of the first Fav
    //this.favList.addTest("Vorgang", "c709906d-bd4e-4a47-be20-7af0c7851acc");
    this.listOfFav = this.favList.favEntitys;
    console.log("blubb", this.listOfFav);

  }
  public toBrowser(iEntity: Entity): void{
    console.log("redirect", iEntity);
    this.settings.vault.view=false;
    this.settings.save();
    this.navCtrl.push(BrowserPage, iEntity);
  }



  public rem(obj: Container): void{
	  this.favList.removeFav(obj);
    //obj.defavor();
	  //this.favList.remAlert(this.alertCtrl);
  }

  public meta(datei: Container): void{
      this.navCtrl.push(datei.Properties);
  }
}
