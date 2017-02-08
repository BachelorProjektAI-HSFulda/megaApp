import { Component } from '@angular/core';

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


  constructor(public navCtrl: NavController, private synAPI: SynactaAPIService, private favService: Favorits, public alertCtrl: AlertController,
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
            );
			let tmp;
			this.synAPI.getDocuments(this.lastUsedView).subscribe(
			 dokuments => tmp = dokuments,
			 error => console.log(error),
			 () => {
				 for(let item of tmp){
					 this.synApiDaten.push(item)
			 }
          } );
        })
	  }
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
      this.synAPI.getDocuments(item).toPromise().then( () => {
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
    if( (this.lastUsedView.ObjectType == "Plan") ) {
      this.displayLayerWarning();
      return false;
    }
    if( !(this.viewByOrg) ) {
      this.synAPI.getParent(this.lastUsedView).subscribe( (parent: Container) => {
        this.navCtrl.push(BrowserPage, parent);
      });
    }
    else {
      this.navCtrl.push(BrowserPage);
    }
    return true;
  }

  public favorite(fav: Container, i): void{
		if(this.favService.checkFav(fav)) {
			//already marked as favorite
			this.favService.removeFav(fav);
			document.getElementById("favorite"+i).style.backgroundColor = "#123456";
		} else {
			//not marked
			this.favService.addFav(fav);
			document.getElementById("favorite"+i).style.backgroundColor = "#986877";
		}
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
    title: 'Confirm deletion',
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

  public meta(metaDaten: Entity) {
	let modal = this.modalCtrl.create(ModalPage, metaDaten);
	modal.present();
}
}


@Component({
  template: `
<content>
<button ion-button (click)="dismiss()">
        <p>
			Cancel
		</p>
      </button>
  <ion-list no-lines>
      <ion-item>
        <h2>{{character.Bezeichnung}}</h2>
      </ion-item>

      <ion-item *ngFor="let item of character['items']">
        <p>{{item.note}}</p>
		<h3>{{item.title}}</h3>
      </ion-item>
  </ion-list>
</content>
`
})


export class ModalPage {
	  character;
	  datenMeta = this.params.get('datenVon');
	constructor(
	public params: NavParams, 
	public viewCtrl: ViewController, 
	public platform: Platform) {
		if(this.datenMeta.ObjectType == "Hauptgruppe")
		{
			var characters = [
			{ Bezeichnung: this.datenMeta.Properties.Bezeichnung,
			items: [
			{ title: 'Stufe', note: this.datenMeta.Properties.Stufe},
			{ title: 'ID', note: this.datenMeta.ID }
			]
			}];
		}
		else if(this.datenMeta.ObjectType == "Akte")
		{
			var characters = [
			{ Bezeichnung: this.datenMeta.Properties.Aktenbetreff,
			items: [
			{ title: 'Erstellt am:', note: this.datenMeta.Properties['Erstellt am']},
			{ title: 'Erstellt von', note: this.datenMeta.Properties['Erstellt von']},
			{ title: 'Geheimschutzstufe', note: this.datenMeta.Properties.Geheimschutzstufe},
			{ title: 'ID', note: this.datenMeta.ID},
			{ title: 'Organisation', note: this.datenMeta.Properties.Organisation}
			]
			}];
		}
		else if(this.datenMeta.ObjectType == "Dokument")
		{
			var characters = [
			{ Bezeichnung: this.datenMeta.Properties.Name,
			items: [
			{ title: 'Erstellt am:', note: this.datenMeta.Properties['Erstellt am']},
			{ title: 'Erstellt von', note: this.datenMeta.Properties['Erstellt von']},
			{ title: 'Geheimschutzstufe', note: this.datenMeta.Properties.Geheimschutzstufe},
			{ title: 'ID', note: this.datenMeta.ID},
			{ title: 'Organisation', note: this.datenMeta.Properties.Organisation},
			{ title: 'Erweiterung', note: this.datenMeta.Properties.Erweiterung}
			]
			}];
		}
		
		
    this.character = characters[0];
  }

	dismiss() {
		this.viewCtrl.dismiss();
	}

}
