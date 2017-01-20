import { Component } from '@angular/core';

import { NavController, NavParams, AlertController } from 'ionic-angular';

import { Favorits } from '../../core/storage/favorits';

import { SynactaAPIService } from '../../core/synacta/api.service';

import { Entity, Container } from '../../core/synacta/api.objects';

@Component({
  selector: 'page-browser',
  templateUrl: 'browser.html'
})
export class BrowserPage {
	daten:Container;
	lastUsedView:Container;
	kram;
	test;

  constructor(public navCtrl: NavController, private synAPI: SynactaAPIService, private fav: Favorits, public alertCtrl: AlertController, private navParams: NavParams) {}
  


   ionViewWillEnter(){
    console.log(this.navParams.get('ID'), this.navParams.get('ObjectType'));
    if(this.navParams.get('ID') == undefined){
      if(this.lastUsedView != undefined){
        this.synAPI.getChildren(this.lastUsedView).subscribe(
          response => this.kram = response,
          error => console.log(error),
          () => console.log("Children", this.kram)
        )
      }
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
}
