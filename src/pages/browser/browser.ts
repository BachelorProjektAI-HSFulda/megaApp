import { Component } from '@angular/core';

import { NavController, NavParams, PopoverController } from 'ionic-angular';

import { Favorits } from '../../core/storage/favorits';

import { SynactaAPIService } from '../../core/synacta/api.service';

import { SearchFilter } from '../searchFilter/searchFilter';

import { Search } from '../../core/synacta/api.search';

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

  constructor(public navCtrl: NavController, private synAPI: SynactaAPIService,
     private fav: Favorits, private navParams: NavParams, private finder: Search,
     public popoverCtrl: PopoverController) {
       //finder example
       console.log(finder.search("0100/xcvcxv"));
       this.test = "Hallo";
     }


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


  public deeper(children: Container): void{
    this.navCtrl.push(BrowserPage, children);
  }


  public higher(current: Entity): void{
	  this.synAPI.getParent(current).subscribe( (parent: Container) => {
		this.synAPI.getParent(parent).subscribe( (grandparent: Container) => {

      this.navCtrl.push(BrowserPage, grandparent);
		})
	  });
  }


  public favorite(favo: Container): void{
  this.fav.addFav(favo);}

  presentPopover(myEvent) {
  let popover = this.popoverCtrl.create(SearchFilter,
    (this.test)
  );
  popover.onDidDismiss(data => { console.log(data) });
  popover.present({
    ev: myEvent
  });
}
}
