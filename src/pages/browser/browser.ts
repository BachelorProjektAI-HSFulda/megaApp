import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { Favorits } from '../../core/storage/favorits';

import { SynactaAPIService } from '../../core/synacta/api.service';

import { Container, Entity } from '../../core/synacta/api.objects';

@Component({
  selector: 'page-browser',
  templateUrl: 'browser.html'
})
export class BrowserPage {
	daten:Container;
	kram;
  test;
  constructor(public navCtrl: NavController, private synAPI: SynactaAPIService, private favList : Favorits, private navParams: NavParams) {
  }

  public deeper(children: Container): void{
	this.synAPI.getChildren(children).subscribe(
	response => this.kram = response,
	error => console.log(error),
	() => console.log("deeper", this.kram));
  }

  public addEntity(item : Container):void{
    this.favList.addFav(item);
  }

  ionViewWillEnter(){
    if(this.navParams.get('ID') == undefined){
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
    }else{
      let id = this.navParams.get('ID');
      let type = this.navParams.get('ObjectType');
      this.kram = new Array<Entity>();
      this.synAPI.getByID(type, id).subscribe(
        response => this.kram.push(response),
        error => console.log(error),
        () => console.log("reDirected" , this.navParams.get('ID'), this.kram));
    }
  }
}
