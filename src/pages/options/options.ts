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
  constructor(public navCtrl: NavController, private lStorage:Storage) {
      
    }

public setHomepage(){
        //this.lStorage.setItem("homepage", this.homepage );
        window.localStorage.setItem('homepage', this.homepage);

        console.log(this.homepage);
    }

public getHomepage():number{
        let data = window.localStorage.getItem('homepage');
        return JSON.parse(data);
        
        //this.lStorage.getItem<number>("homepage");
    }

  //localStorage.setItem("homepage", {{ homepage }} );
}
