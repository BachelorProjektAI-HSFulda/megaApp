import { Component, NgModule } from '@angular/core';

import { NavController, NavParams, AlertController, ModalController, ViewController, Platform } from 'ionic-angular';

import { Favorits } from '../../core/storage/favorits';

import { SynactaAPIService, MockupUser } from '../../core/synacta/api.service';

import { Entity, Container } from '../../core/synacta/api.objects';

import { SettingsService} from '../../core/settings/settings.service';

import { SortService } from '../../core/sort/sort.service'


interface OrgData{
  Org: string;
  Data:Array<Container>;
}

@Component({
  selector: 'page-browser',
  templateUrl: 'browser.html'
})

export class BrowserPage {
  viewByOrg:boolean;
  viewByOrgData:Array<OrgData>;
  daten:Container;
  lastUsedView:Container;
  user:MockupUser;
  synApiDaten:Array<any>;
  searchBar:string;
  sortOptionsVisible;
  sortOptionsClass;
  sorting:string;


  constructor(public navCtrl: NavController, private synAPI: SynactaAPIService, private fav: Favorits, public alertCtrl: AlertController,
  private navParams: NavParams, public modalCtrl: ModalController, private settings: SettingsService,
  private sortService : SortService) {
    //todo get value from option
    settings.load();
    this.viewByOrg = settings.vault.view;
    this.viewByOrgData = new Array<OrgData>();
    this.user = synAPI.demoUser;
    this.sortOptionsVisible = false;
    this.sortOptionsClass = "";
    this.synApiDaten = new Array<any>();
    this.searchBar = "hallo";
  }

  ionViewDidEnter(){
    //Rebuild last View
    let id = this.navParams.get('ID');
    let type = this.navParams.get('ObjectType');
    console.log(id,type, (id == undefined));
    if(id == undefined){
      if(this.lastUsedView != undefined){
        this.synAPI.getChildren(this.lastUsedView).subscribe(
          response => this.synApiDaten = response,
          error => console.log(error),
          () => console.log("Children", this.synApiDaten)
        )
      }
      //Build a view from all User Organisations
      //Mit Kunden besprechen ob es überhaupt notwendig ist
      //für alle User Organisationen die Akten zu laden da
      //zurzeit alle Daten für jede Organsations ID zugänglich ist
      else{
        if(this.viewByOrg){
          this.getFromOrg(null);
        }
        //Build a view from Root
        else{
          this.synAPI.getRoot().subscribe(
            response => this.daten = response,
            error => console.log(error),
            () => {
              console.log("Root", this.daten);
              this.synAPI.getChildren(this.daten).subscribe(
                response => this.synApiDaten = response,
                error => console.log(error),
                () => console.log("Children", this.synApiDaten)
              )
            });
          }
        }
      }else{
        //Build a view from navParams and set it as lastUsedView
        console.log("why");
        this.synAPI.getByID(type, id).subscribe(
          response => this.lastUsedView = response,
          error => console.log(error),
          () => {
            console.log("reDirected" , this.navParams.get('ID'))
            this.synAPI.getChildren(this.lastUsedView).subscribe(
              children => this.synApiDaten = children,
              error => console.log(error),
              () => console.log("Children", this.synApiDaten)
            )
          });
        }
      }

  ablehnen() {
	  let alert = this.alertCtrl.create({
		  title: 'Hinweis',
		  subTitle: 'Es gibt keine Weitere Ebene!',
		  buttons: ['OK']
	  });
	  alert.present();
  }


  public deeper(children: Container): void{
    if(children.HasChild == true)
    {
      this.navCtrl.push(BrowserPage, children);
    }
    else{
      this.ablehnen();
    }
  }

  public higher(current: Entity): void{
    if(!(this.viewByOrg)){
      if(current.ParentType != "Plan"){
      this.synAPI.getParent(current).subscribe( (parent: Container) => {
        this.synAPI.getParent(parent).subscribe( (grandparent: Container) => {
          this.navCtrl.push(BrowserPage, grandparent);
        })
      });
    }
    else{
      this.ablehnen();
    }
  }this.navCtrl.push(BrowserPage);

  }

  public favorite(favo: Container, i): void{
		if(this.fav.checkFav(favo)) {
			//already marked as favorite
			this.fav.removeFav(favo);
			document.getElementById("favorite"+i).style.backgroundColor = "#123456";
		} else {
			//not marked
			this.fav.addFav(favo);
			document.getElementById("favorite"+i).style.backgroundColor = "#986877";
		}
		this.checkFavorite(favo);

  }

  public checkFavorite(favo: Container): void {
		console.log("<<<<<<<<<<<<<<<<");
	}

  public switchView(){
    if(this.settings.vault.view){
      this.settings.vault.view=false;
    }
    else{
       this.settings.vault.view=true;
    }
    this.settings.save();
    this.navCtrl.push(BrowserPage);
  }

  //start the Search from searchBar
  private startSearch(){
    console.log(this.searchBar);
    if(this.searchBar == ""){
      this.getFromOrg(null);
    }else{
      this.getFromOrg(this.searchBar);
    }
  }

  private getFromOrg(s: string){
    for(let item of this.user.Orgs){
      let tmp = new Array<any>();
      let search = (s == null)? null : "Aktenbetreff, '"+s+"'";
      this.synAPI.getContainersByOrg("Akte", item, search).subscribe(
        response => tmp = response,
        error => console.log(error),
        () => {
          let data:OrgData ={Org: item, Data: tmp};
          this.viewByOrgData.push(data);
        }
      )
    }
    this.viewByOrgData.splice(0,this.user.Orgs.length);;
  }

  public delete(del: Entity) {
	  console.log("Löschen_1");
  this.loeschen(del);
  console.log("Löschen_2");
}
  public loeschen(del: Entity) {
	  let alert = this.alertCtrl.create({
    title: 'Confirm purchase',
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
  let sOs = document.getElementsByClassName("sortOptions");
  let sO = sOs[sOs.length-1];
  if(this.sortOptionsVisible == false) {
    this.sortOptionsClass = sO.className;
    sO.className += " visible";
    this.sortOptionsVisible = true;
  } else {
    sO.className = this.sortOptionsClass;
    this.sortOptionsVisible = false;
  }
}

public updateSorting(){
  console.log(this.sorting);
  if(this.sorting == "Aktenzeichen"){
    if(this.viewByOrg){
      for(let n=0; n < this.viewByOrgData.length; n++){
        this.viewByOrgData[n].Data = this.sortService.sortByAktenzeichen(false,
          this.viewByOrgData[n].Data)
        }
      }else{
        this.synApiDaten = this.sortService.sortByAktenzeichen(false,
          this.synApiDaten)
        }
  }
  else{
    let sotierenErstelltam:boolean = (this.sorting == "Erstellt am")? true:false;
    if(this.viewByOrg){
      for(let n=0; n < this.viewByOrgData.length; n++){
        this.viewByOrgData[n].Data = this.sortService.sortByDate(false, sotierenErstelltam,
          this.viewByOrgData[n].Data)
        }
      }else{
        this.synApiDaten = this.sortService.sortByDate(false, sotierenErstelltam,
          this.synApiDaten)
        }
      }
    }

//To Finish: ModalController
  public meta(characterNum) {
	//let characterNum = 1;
	let modal = this.modalCtrl.create(ModalPage, characterNum);
	modal.present();
}
}


@Component({
  template: `
<ion-header>
  <ion-toolbar>
    <ion-title>
      Description
    </ion-title>
    <ion-buttons start>
      <button ion-button (click)="dismiss()">
        <span ion-text color="primary" showWhen="ios">Cancel</span>
        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>
      </button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>
<ion-content>
  <ion-list>
      <ion-item>
        <h2>{{character.name}}</h2>
        <p>{{character.quote}}</p>
      </ion-item>
      <ion-item *ngFor="let item of character['items']">
        {{item.title}}
        <ion-note item-right>
          {{item.note}}
        </ion-note>
      </ion-item>
  </ion-list>
</ion-content>
`
})

@Component({
  selector: 'page-modal',
  templateUrl: 'modal-content.html'
})
export class ModalPage {
	  character;
	constructor(public params: NavParams, public viewCtrl: ViewController, public platform: Platform) {
		var characters = [
      {
        name: 'Gollum',
        quote: 'Sneaky little hobbitses!',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'River Folk' },
          { title: 'Alter Ego', note: 'Smeagol' }
        ]
      },
      {
        name: 'Frodo',
        quote: 'Go back, Sam! I\'m going to Mordor alone!',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Weapon', note: 'Sting' }
        ]
      },
      {
        name: 'Samwise Gamgee',
        quote: 'What we need is a few good taters.',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Nickname', note: 'Sam' }
        ]
      }
    ];
    this.character = characters[this.params.get('charNum')];
  }

	dismiss() {
		this.viewCtrl.dismiss();
	}

}
