import { Component, NgModule } from '@angular/core';

import { NavController, NavParams, AlertController } from 'ionic-angular';

import { Favorits } from '../../core/storage/favorits';

import { SynactaAPIService, Mockup } from '../../core/synacta/api.service';

import { Entity, Container } from '../../core/synacta/api.objects';

@Component({
  selector: 'page-browser',
  templateUrl: 'browser.html'
})
export class BrowserPage {
  viewByOrg:boolean;
  daten:Container;
	lastUsedView:Container;
  user:Mockup;
	kram:Array<any>;
	searchBar:string;

  constructor(public navCtrl: NavController, private synAPI: SynactaAPIService, private fav: Favorits, public alertCtrl: AlertController, private navParams: NavParams) {
    //todo get value from option
    this.viewByOrg = true;
    this.user = synAPI.demoUser;
    this.kram = new Array<any>();
    this.searchBar = "hallo";
  }



  ionViewWillEnter(){
    console.log(this.navParams.get('ID'), this.navParams.get('ObjectType'));
    //Rebuild last View
    if(this.navParams.get('ID') == undefined){
      if(this.lastUsedView != undefined){
        this.synAPI.getChildren(this.lastUsedView).subscribe(
          response => this.kram = response,
          error => console.log(error),
          () => console.log("Children", this.kram)
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
                response => this.kram = response,
                error => console.log(error),
                () => console.log("Children", this.kram)
              )
            });
          }
        }
      }
      //Build a view from navParams and set it as lastUsedView
      else{
        let id = this.navParams.get('ID');
        let type = this.navParams.get('ObjectType');
        this.synAPI.getByID(type, id).subscribe(
          response => this.lastUsedView = response,
          error => console.log(error),
          () => {
            console.log("reDirected" , this.navParams.get('ID'))
            this.synAPI.getChildren(this.lastUsedView).subscribe(
              children => this.kram = children,
              error => console.log(error),
              () => console.log("Children", this.kram)
            )
          } );
        }
      }

  ablehnen() {
	  let alert = this.alertCtrl.create({
		  title: 'Fehler',
		  subTitle: 'Es gibt keine Weitere Ebene!',
		  buttons: ['OK']
	  });
	  alert.present();
  }

  public meta(datei: Container): void{
    if(datei.HasChild){
      this.deeper(datei);
    }
    else{
      this.navCtrl.push(datei.Properties);
    }
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
    if(this.viewByOrg){
      this.viewByOrg=false
    }
    else this.viewByOrg=true;
    //this.navCtrl.push(BrowserPage);
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
    let tmp = new Array<any>();
    for(let item of this.user.Orgs){
      let data;
      let search = (s == null)? null : "Aktenbetreff, '"+s+"'";
      this.synAPI.getContainersByOrg("Akte", item, search).subscribe(
        response => data = response,
        error => console.log(error),
        () => {
          console.log(data);
          for(let item of data){
            if(tmp.length == 0){
              tmp.push(item)
            }
            let check:boolean = false;
            for(let checkItem of tmp){
              if(item.ID == checkItem.ID){
                check = true
              }
              console.log(item.ID == checkItem.ID);
            }
            if(!check){
              tmp.push(item)
            }
          }
          console.log(this.kram);
        }
      )
    }
    this.kram = tmp;
  }
}
