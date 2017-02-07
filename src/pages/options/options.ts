import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { SettingsService, Pages } from '../../core/settings/settings.service';

@Component({
  selector: 'page-options',
  templateUrl: 'options.html'
})
export class OptionsPage {

  backgroundColor;
  homepage;
  accentColor;

  pages = Pages;

  constructor(public navCtrl: NavController, private settings: SettingsService) {
    this.load();
  }

  load() {
    this.backgroundColor = this.settings.vault.backgroundColor;
    this.homepage = this.settings.vault.homepage;
    this.accentColor = this.settings.vault.accentColor;
  }

  save() {
    this.settings.vault.backgroundColor = this.backgroundColor;
    this.settings.vault.homepage = this.homepage;
    this.settings.vault.accentColor = this.accentColor;
    this.settings.save();
    window.location.reload();
  }

  loadDefaults() {
    this.settings.loadDefaults();
    this.load();
  }

  //scope.showSelectValue = function (mySelect) {
  //    console.log(mySelect);
  //}
}
