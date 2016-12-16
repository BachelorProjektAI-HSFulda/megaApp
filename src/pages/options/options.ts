import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-options',
  templateUrl: 'options.html'
})
export class OptionsPage {
  backgroundColor;
  homepage;
  accentColor;
  constructor(public navCtrl: NavController) {
      
    }


  //localStorage.setItem("homepage", {{ homepage );

  //scope.showSelectValue = function (mySelect) {
  //    console.log(mySelect);
  //}
}
