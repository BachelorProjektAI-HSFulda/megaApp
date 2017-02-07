import { Injectable } from '@angular/core';


interface Settings {
    homepage;
    backgroundColor;
    accentColor;
    view;
}

@Injectable()
export class SettingsService {

    vault: Settings;

    constructor() {
        this.loadDefaults();
        this.load();
    }

    loadDefaults() {
        this.vault = {
            homepage: "0",
            backgroundColor: "blue",
            accentColor: "blue",
            view: false
        };
    }

    save() {
        window.localStorage.setItem('settings', JSON.stringify(this.vault));
    }

    load() {

      if(!window.localStorage.getItem('settings')){
        this.save();
      }
      let raw = window.localStorage.getItem('settings');
      if (raw != null) this.vault = JSON.parse(raw);

    }

  }


export enum Pages {
    RecentPage, FavoritePage, BrowserPage, OptionsPage
}
