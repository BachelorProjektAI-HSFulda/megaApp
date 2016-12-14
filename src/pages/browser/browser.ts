import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Favorits } from '../../core/storage/favorits';

import { SynactaAPIService } from '../../core/synacta/api.service';

@Component({
  selector: 'page-browser',
  templateUrl: 'browser.html'
})
export class BrowserPage {
	daten;
	kram;
  constructor(public navCtrl: NavController, private favList: Favorits, private synAPI: SynactaAPIService) {
    favList.addTest("Vorgang", "32fae6ab-4ab1-48cc-8292-5fbf39258345");
    favList.addTest("Vorgang", "6b35df93-9e11-4796-b627-27e2abf0f3bd");
	
	
	this.synAPI.getRoot().subscribe(
		response => this.daten = response,
		error => console.log(error),
		() => console.log("RootChildren", this.daten));
	console.log("Test1",this.daten);
	console.log("Test1",this.kram);
	console.log("Test1",this.daten);
	console.log("Test1",this.kram);
	console.log("Test1",this.daten);
	console.log("Test1",this.kram);
	console.log("Test1",this.daten);
	console.log("Test1",this.kram);
	console.log("Test1",this.daten);
	console.log("Test1",this.kram);
	this.kram = this.synAPI.getChildren(this.daten);
	
	console.log("Children", this.kram);
	}
 
}
