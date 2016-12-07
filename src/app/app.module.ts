import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { FavoritePage } from '../pages/favorite/favorite';
import { BrowserPage } from '../pages/browser/browser';
import { RecentPage } from '../pages/recent/recent';
import { OptionsPage} from '../pages/options/options';
import { TabsPage } from '../pages/tabs/tabs';
import { SynactaAPIService } from '../core/synacta/api.service';
import { Favorits } from '../core/storage/favorits';
import { Storage } from '../core/storage/storage';

@NgModule({
  declarations: [
    MyApp,
    FavoritePage,
    BrowserPage,
    RecentPage,
	OptionsPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FavoritePage,
    BrowserPage,
    RecentPage,
	OptionsPage,
    TabsPage
  ],
  providers: [
    SynactaAPIService,
    Favorits,
    Storage
  ]
})
export class AppModule {}
