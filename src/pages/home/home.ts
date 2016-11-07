import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { SynactaAPIService } from '../../core/synacta/api.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // will be changed asynchronously 
  data;

  constructor(public navCtrl: NavController, synAPI: SynactaAPIService) {
    // TODO proper error and completion handling without console.log
    // TODO parse the response object in the right way
    synAPI.get("/root", null, null).subscribe(
      response => this.data = response,
      error => console.log(error),
      () => console.log("Completed!")
    );
  }

}