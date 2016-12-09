import { Component } from '@angular/core';

import { RecentPage } from '../recent/recent';
import { FavoritePage } from '../favorite/favorite';
import { BrowserPage } from '../browser/browser';
import { OptionsPage } from '../options/options';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = RecentPage;
  tab2Root: any = FavoritePage;
  tab3Root: any = BrowserPage;
  tab4Root: any = OptionsPage;

  constructor(public NavController:NavController) {
	NavController.setRoot(OptionsPage);
  }
  
}
