import { Component, OnInit } from '@angular/core';

import { NavController } from 'ionic-angular';

import { SynactaAPIService } from '../../core/synacta/api.service';

import { Favorits } from '../../core/storage/favorits';

import { RecentList} from '../../core/storage/recentList';

import { Container } from '../../core/synacta/api.objects';

@Component({
  selector: 'page-recent',
  templateUrl: 'recent.html'
})
export class RecentPage implements OnInit{

  listOfRec
  // will be changed asynchronously
  // just for example use
  data00;
  data01;
  data02;

  constructor(public navCtrl: NavController, synAPI: SynactaAPIService, private favList: Favorits,
    private recList: RecentList) {
    // favList.addTest("Vorgang", "32fae6ab-4ab1-48cc-8292-5fbf39258345");
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
    recList.addTest("Vorgang", "32fae6ab-4ab1-48cc-8292-5fbf39258345");
    recList.addTest("Vorgang", "85f23fd7-14e4-4b5e-959f-a49f3137df8e");
    recList.addTest("Vorgang", "8ee1ce7e-588c-4ece-b07c-b3fa2e1ec114");
    //favList.addTest("Vorgang", "d154f762-66b5-41ec-a641-af950518e8fb");
    console.log(recList.getRec());
    console.log(recList.loadEntitys());
  }

  ngOnInit():void{
    this.listOfRec = this.recList.recList;
  }

  public meta(datei: Container): void{
      this.navCtrl.push(datei.Properties);
  }
}
