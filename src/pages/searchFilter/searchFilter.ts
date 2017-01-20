import { Component } from '@angular/core';

import { PopoverController, ViewController, NavParams} from 'ionic-angular';

@Component({
  template: `
    <ion-list>
      <ion-list-header>Ionic</ion-list-header>
      <button ion-item (click)="close()">Learn Ionic</button>
      <button ion-item (click)="close()">Documentation</button>
      <button ion-item (click)="close()">Showcase</button>
      <button ion-item (click)="antword()">GitHub Repo</button>
    </ion-list>
  `
})
export class SearchFilter {
  text
  callback
  constructor(public viewCtrl: ViewController, public navParams : NavParams ) {
    this.text = "byebye"
    this.callback = this.navParams.get('callback');
    console.log(this.callback)
  }

  antwortd(){
    this.callback("hallo");
  }

  close() {
    this.viewCtrl.dismiss(this.text);
  }
}
