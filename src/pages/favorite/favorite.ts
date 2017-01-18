import { Component, OnInit } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Favorits } from '../../core/storage/favorits';

@Component({
  selector: 'page-favorite',
  templateUrl: 'favorite.html'
})
export class FavoritePage implements OnInit {
  listOfFav;
  constructor(public navCtrl: NavController, private favList: Favorits) {
    //initialize the favEntitys Array from favList
    favList.loadEntitys();

    console.log(favList.getFav());
    favList.addTest("Vorgang", "32fae6ab-4ab1-48cc-8292-5fbf39258345");
    favList.addTest("Vorgang", "6b35df93-9e11-4796-b627-27e2abf0f3bd");
    favList.addTest("Vorgang", "76363a0f-084b-4d97-96f9-219a6b536f07");
    favList.addTest("Vorgang", "85f23fd7-14e4-4b5e-959f-a49f3137df8e");
    favList.addTest("Vorgang", "8ee1ce7e-588c-4ece-b07c-b3fa2e1ec114");
    favList.addTest("Vorgang", "d154f762-66b5-41ec-a641-af950518e8fb");
    console.log(favList.getFav());

    //example
    console.log(favList.favEntitys);
    console.log(favList.getEntitys());
	
  }

  ngOnInit():void{
    //init of the first Fav
    //this.favList.addTest("Vorgang", "c709906d-bd4e-4a47-be20-7af0c7851acc");
    this.listOfFav = this.favList.favEntitys;
    console.log("blubb", this.listOfFav);

  }

  showAlert() {
	  let alert = this.alertCtrl.create({
		  title: 'Favorit entfernt',
		  subTitle: 'Akte/Container wurde erfolgreich von den Favoriten entfernt',
		  buttons: ['OK']
	  });
	  alert.present();
  }
  
  public rem(obj: Container): void{
	  this.favList.removeFav(obj);
	  this.showAlert();
  }
}
