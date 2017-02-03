import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { FavoritePage } from '../pages/favorite/favorite';
import { BrowserPage } from '../pages/browser/browser';
import { RecentPage } from '../pages/recent/recent';
import { OptionsPage} from '../pages/options/options';
import { ModalPage } from '../pages/browser/browser';
import { TabsPage } from '../pages/tabs/tabs';
import { SynactaAPIService } from '../core/synacta/api.service';
import { Favorits } from '../core/storage/favorits';
import { Storage } from '../core/storage/storage';
import { RecentList } from '../core/storage/recentList'
import { SettingsService } from '../core/settings/settings.service';

@NgModule({
  declarations: [
    MyApp,
    FavoritePage,
    BrowserPage,
    RecentPage,
	OptionsPage,
    TabsPage,
	ModalPage
  ],
  imports: [
    IonicModule.forRoot(MyApp, {
      backButtonText: 'Go Back',
      iconMode: 'md',
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
      tabsPlacement: 'bottom',
      pageTransition: 'ios',
      mode: 'md'
    }, {}),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FavoritePage,
    BrowserPage,
    RecentPage,
	OptionsPage,
    TabsPage,
	ModalPage
  ],
  providers: [
    SynactaAPIService,
    Favorits,
    Storage,
    RecentList,
    SettingsService
  ]
})
export class AppModule {}
