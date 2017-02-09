import { Component } from '@angular/core';

import { NavController, NavParams, AlertController, ModalController, ViewController, Platform } from 'ionic-angular';

import { Favorits } from '../../core/storage/favorits';

import { SynactaAPIService, MockupUser } from '../../core/synacta/api.service';

import { Entity, Container } from '../../core/synacta/api.objects';

import { SettingsService } from '../../core/settings/settings.service';

import { SortService } from '../../core/sort/sort.service';

import { MetadataPage } from '../metadata/metadata';

interface OrgData {
  Org: string;
  Data: Array<Container>;
}

const DATA_STATUS_LOADING: string = "Daten werden geladen...";
const DATA_STATUS_FAILED: string = "Daten konnten nicht geladen werden!";
const SEARCH_BAR_PLACEHOLDER: string = "Suchbegriff eingeben...";

@Component({
  selector: 'page-browser',
  templateUrl: 'browser.html'
})

export class BrowserPage {
  viewByOrg: boolean;
  viewByOrgData: Array<OrgData>;
  daten: Container;
  lastUsedView: Container;
  user: MockupUser;
  synApiDaten: Array<any>;
  searchBar: string;
  sortOptionsVisible;
  sortOptionsClass;
  dataStatusMessage: string;
  sorting;

  constructor(public navCtrl: NavController, private synAPI: SynactaAPIService, private favService: Favorits, public alertCtrl: AlertController,
    private navParams: NavParams, public modalCtrl: ModalController, private settings: SettingsService,
    private sortService: SortService) {
    //todo get value from option
    settings.load();
    this.viewByOrg = settings.vault.view;
    this.viewByOrgData = new Array<OrgData>();
    this.user = synAPI.demoUser;
    this.sortOptionsVisible = false;
    this.sortOptionsClass = "";
    this.synApiDaten = new Array<any>();
    this.searchBar = SEARCH_BAR_PLACEHOLDER;
    this.dataStatusMessage = DATA_STATUS_LOADING;
  }

  ionViewDidEnter() {
    //Rebuild last View
    let id = this.navParams.get('ID');
    let type = this.navParams.get('ObjectType');
    
    if ( this.boot(type, id) ) {
      // call to boot is successful
    }
    else if ( this.restore() ) {
      // last data view could be restored
    }
    else if ( this.getFromOrg() ) {
      // get from org could be executed
    }
    else {
      // if nothing else works, load the root node
      this.loadRoot()
    }
  }

  private boot(type, id): boolean {
    if (id == undefined || type == undefined) {
      return false;
    }
    this.synAPI.getByID(type, id).subscribe(
      response => {
        this.lastUsedView = response;
        this.loadData();
      },
      error => {
        console.log(error);
        this.dataStatusMessage = DATA_STATUS_FAILED;
      }
    );
    return true;
  }

  private getFromOrg(s?: string): boolean {
    if ( !this.viewByOrg ) {
      return false;
    }
    for (let item of this.user.Orgs) {
      let search = (s == undefined) ? null : "Aktenbetreff, '" + s + "'";
      this.synAPI.getContainersByOrg("Akte", item, search).subscribe(
        response => {
          let data: OrgData = { Org: item, Data: response };
          this.viewByOrgData.push(data);
        },
        error => {
          console.log(error);
          this.dataStatusMessage = DATA_STATUS_FAILED;
        }
      )
    }
    return true;
  }

  private restore(): boolean {
    if ( this.viewByOrg == true || this.viewByOrg == false && this.lastUsedView == undefined ) {
      return false;
    }
    this.loadData();
    return true;
  }

  private loadRoot(): void {
    this.synAPI.getRoot().subscribe(
      root => {
        this.lastUsedView = root;
        this.loadData();
      },
      error => {
        console.log(error);
        this.dataStatusMessage = DATA_STATUS_FAILED;
      }
    );
  }

  private loadData(): boolean {
    if ( this.lastUsedView == undefined ) {
      return false;
    }
    this.synAPI.getDocuments(this.lastUsedView).subscribe(
      documents => {
        for (let item of documents) {
          this.synApiDaten.push(item)
        }
      },
      error => {
        console.log(error);
        this.dataStatusMessage = DATA_STATUS_FAILED;
      }
    );
    this.synAPI.getChildren(this.lastUsedView).subscribe(
      children => this.synApiDaten = children,
      error => {
        console.log(error);
        this.dataStatusMessage = DATA_STATUS_FAILED;
      }
    );
    return true;
  }

  displayLayerWarning() {
    let alert = this.alertCtrl.create({
      title: 'Hinweis',
      subTitle: 'Es gibt keine Weitere Ebene!',
      buttons: ['OK']
    });
    alert.present();
  }

  public downHandler(item): boolean {
    if (item instanceof Container && item.HasChild) {
      this.synAPI.getDocuments(item).toPromise().then(() => {
        this.navCtrl.push(BrowserPage, item);
      });
      return true;
    }
    else {
      this.displayLayerWarning();
      return false;
    }
  }

  public upHandler(): boolean {
    if ((this.lastUsedView.ObjectType == "Plan")) {
      this.displayLayerWarning();
      return false;
    }
    if (!(this.viewByOrg)) {
      this.synAPI.getParent(this.lastUsedView).subscribe((parent: Container) => {
        this.navCtrl.push(BrowserPage, parent);
      });
    }
    else {
      this.navCtrl.push(BrowserPage);
    }
    return true;
  }

  public favorite(fav: Container, i): void {
    if (this.favService.checkFav(fav)) {
      //already marked as favorite
      this.favService.removeFav(fav);
      document.getElementById("favorite" + i).style.backgroundColor = "#123456";
    } else {
      //not marked
      this.favService.addFav(fav);
      document.getElementById("favorite" + i).style.backgroundColor = "#986877";
    }
  }

  public switchView() {
    if (this.settings.vault.view) {
      this.settings.vault.view = false;
    }
    else {
      this.settings.vault.view = true;
    }
    this.settings.save();
    this.navCtrl.push(BrowserPage);
  }

  //start the Search from searchBar
  private startSearch() {
    console.log(this.searchBar);
    if (this.searchBar == "") {
      this.getFromOrg(null);
    } else {
      this.getFromOrg(this.searchBar);
    }
  }

  public delete(del: Entity) {
    console.log("Löschen_1");
    this.loeschen(del);
    console.log("Löschen_2");
  }

  public loeschen(del: Entity) {
    let alert = this.alertCtrl.create({
      title: 'Löschen bestätigen',
      message: 'Wollen Sie das wirklich löschen?',
      buttons: [
        {
          text: 'Ja',
          role: 'ja',
          handler: () => {
            console.log(this.synAPI.deleteEntity(del));
          }
        },
        {
          text: 'Nein',
          handler: () => {
            console.log('Nein clicked');
          }
        }
      ]
    });
    alert.present();
  }

  public viewSort() {
    console.log("my sort:", this.sorting);
    if (this.sorting != undefined) {
    }
    let sOs = document.getElementsByClassName("sortOptions");
    let sO = sOs[sOs.length - 1];
    if (this.sortOptionsVisible == false) {
      this.sortOptionsClass = sO.className;
      sO.className += " visible";
      this.sortOptionsVisible = true;
    } else {
      sO.className = this.sortOptionsClass;
      this.sortOptionsVisible = false;
    }
  }

  public updateSorting() {
    let input: string = this.sorting
    let sorttype: string;
    let sortOption: boolean;

    switch (input) {
      case "AZfalse":
        sorttype = "AkZ"
        sortOption = false;
        break;
      case "AZtrue":
        sorttype = "AkZ"
        sortOption = true;
        break;
      case "Gafalse":
        sorttype = "GeA"
        sortOption = false;
        break;
      case "Gatrue":
        sorttype = "GeA"
        sortOption = true;
        break;
      case "Erafalse":
        sorttype = "ErA"
        sortOption = false;
        break;
      case "Eratrue":
        sorttype = "ErA"
        sortOption = true;
        break;
      default: ;
    }

    if (sorttype == "AkZ") {
      for (let n = 0; n < this.viewByOrgData.length; n++) {
        this.viewByOrgData[n].Data = this.sortService.sortByAktenzeichen(sortOption, this.viewByOrgData[n].Data)
      }
    }
    else if (sorttype == "GeA") {
      for (let n = 0; n < this.viewByOrgData.length; n++) {
        this.viewByOrgData[n].Data = this.sortService.sortByDate(sortOption, false, this.viewByOrgData[n].Data)
      }
    }
    else if (sorttype == "ErA") {
      for (let n = 0; n < this.viewByOrgData.length; n++) {
        this.viewByOrgData[n].Data = this.sortService.sortByDate(sortOption, true, this.viewByOrgData[n].Data)
      }
    }
  }

  public meta(metaDaten: Entity) {
    let modal = this.modalCtrl.create(MetadataPage, metaDaten);
    modal.present();
  }
}
