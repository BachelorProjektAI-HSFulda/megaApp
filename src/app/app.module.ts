import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
// Pages
import { FavoritePage } from '../pages/favorite/favorite';
import { BrowserPage } from '../pages/browser/browser';
import { RecentPage } from '../pages/recent/recent';
import { OptionsPage} from '../pages/options/options';
import { TabsPage } from '../pages/tabs/tabs';
// Core
import { SynactaAPIService } from '../core/synacta/api.service';
import { Favorits } from '../core/storage/favorits';
import { Storage } from '../core/storage/storage';
import { RecentList } from '../core/storage/recentList'
import { SettingsService } from '../core/settings/settings.service';
// MockBackend
import { MockBackend } from '@angular/http/testing';
import { BaseRequestOptions, Http } from '@angular/http';

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
    //HttpModule
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
    Storage,
    RecentList,
    SettingsService,
    // MockBackend
    MockBackend,
    BaseRequestOptions,
    {
        provide: Http,
        deps: [ MockBackend, BaseRequestOptions ],
        useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
        }
    }
  ]
})
export class AppModule {}
