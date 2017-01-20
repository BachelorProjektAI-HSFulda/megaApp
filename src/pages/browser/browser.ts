import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Favorits } from '../../core/storage/favorits';

import { SynactaAPIService } from '../../core/synacta/api.service';


import { Search } from '../../core/synacta/api.search';

import { Entity, Container } from '../../core/synacta/api.objects';


@Component({
  selector: 'page-browser',
  templateUrl: 'browser.html'
})
export class BrowserPage {
	daten:Container;
	kram;
  test;



  constructor(public navCtrl: NavController, private fav: Favorits, private  synAPI: SynactaAPIService, private finder: Search) {

    console.log(finder.search("0100/xcvcxv"));

	synAPI.getRoot().subscribe(
		response => this.daten = response,
		error => console.log(error),
		() => {
        console.log("Root", this.daten);
        synAPI.getChildren(this.daten).subscribe(
          response => this.kram = response,
          error => console.log(error),
          () => console.log("Children", this.kram)

        )

    });

  }

  public deeper(children: Container): void{
	this.synAPI.getChildren(children).subscribe(
		response => this.kram = response,
		error => console.log(error),
		() => console.log("deeper", this.kram)
	);
  }


  public higher(current: Entity): void{
	  this.synAPI.getParent(current).subscribe( (parent: Container) => {
		this.synAPI.getParent(parent).subscribe( (grandparent: Container) => {
			this.synAPI.getChildren(grandparent).subscribe(
				children => this.kram = children,
				error => console.log(error),
				() => console.log("Children", this.kram)
			)
		})
	  });
  }


  public favorite(favo: Container): void{
  this.fav.addFav(favo);}
}
