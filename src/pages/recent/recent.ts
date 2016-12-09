import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { SynactaAPIService } from '../../core/synacta/api.service';

import { Favorits } from '../../core/storage/favorits';

@Component({
  selector: 'page-recent',
  templateUrl: 'recent.html'
})
export class RecentPage {

  // will be changed asynchronously
  // just for example use
  data00;
  data01;
  data02;

  constructor(public navCtrl: NavController, synAPI: SynactaAPIService, private favList: Favorits) {
    favList.addTest("Vorgang", "32fae6ab-4ab1-48cc-8292-5fbf39258345");
    // TODO proper error and completion handling without console.log
    // TODO parse the response object in the right way
    synAPI.getRoot().subscribe(
       response => this.data00 = response,
       error => console.log(error),
       () => console.log("Completed!", this.data00)
    );
    synAPI.getByID("Vorgang", "d154f762-66b5-41ec-a641-af950518e8fb").subscribe(
      response => this.data01 = response,
      error => console.log(error),
      () => console.log("Completed 2!", this.data01)
    );
    synAPI.getByType("Vorgang").subscribe(
      response => this.data02 = response,
      error => console.log(error),
      () => console.log("Completed 2!", this.data02)
    );
  }
}
