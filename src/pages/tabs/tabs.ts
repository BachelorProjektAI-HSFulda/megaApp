import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { RecentPage } from '../recent/recent';
import { FavoritePage } from '../favorite/favorite';
import { BrowserPage } from '../browser/browser';
import { OptionsPage } from '../options/options';

import { SettingsService } from '../../core/settings/settings.service';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage implements OnInit {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = RecentPage;
  tab2Root: any = FavoritePage;
  tab3Root: any = BrowserPage;
  tab4Root: any = OptionsPage;

  homepage = 0;

  constructor(
    private settings: SettingsService) {
	
  }

  ngOnInit(): void {
    this.homepage = this.settings.vault.homepage;
  }
}
