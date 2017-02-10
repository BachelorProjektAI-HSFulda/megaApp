import { Component, OnInit } from '@angular/core';

import { NavController, ModalController, AlertController } from 'ionic-angular';

import { SynactaAPIService } from '../../core/synacta/api.service';

import { Favorits } from '../../core/storage/favorits';

import { RecentList} from '../../core/storage/recentList';

import { Entity, Container } from '../../core/synacta/api.objects';

import { MetadataPage } from '../metadata/metadata';

import { SettingsService} from '../../core/settings/settings.service';

import { BrowserPage } from '../browser/browser';

const DATA_STATUS_LOADING: string = "Daten werden geladen...";

@Component({
  selector: 'page-recent',
  templateUrl: 'recent.html'
})
export class RecentPage implements OnInit{

  listOfRec;
  dataStatusMessage;

  constructor(public navCtrl: NavController, synAPI: SynactaAPIService, private favService: Favorits,
    private recList: RecentList, private modalCtrl: ModalController, public alertCtrl: AlertController,
    private settings: SettingsService) {
     console.log(recList.loadEntitys());
     this.dataStatusMessage = DATA_STATUS_LOADING;
  }

  ngOnInit():void{
    this.listOfRec = this.recList.recList;
  }

  ionViewWillEnter(){
    console.log("enter",this.recList.recList );
    this.listOfRec = this.recList.recList;
  }

  public favorite(fav: Container, i): void {
    if (this.favService.checkFav(fav)) {
      //already marked as favorite
      this.favService.removeFav(fav);
    } else {
      //not marked
      this.favService.addFav(fav);
    }
  }

  public toBrowser(item: Entity): void {
    this.settings.vault.view = false;
    this.settings.save();
    this.navCtrl.push(BrowserPage, item);
  }

  public displayMetadata(item: Entity) {
    let modal = this.modalCtrl.create(MetadataPage, {datenVon: item});
    modal.present();
  }
  private checkDumy(item:Entity):boolean{
    let check:boolean = (item.ParentType == "Wurzel")? false:true;
    return check;
  }
}
