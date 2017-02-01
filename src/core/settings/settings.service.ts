import { Injectable, OnInit } from '@angular/core';

interface Settings {
    homepage;
    backgroundColor;
    accentColor;
}

@Injectable()
export class SettingsService implements OnInit {
    
    vault: Settings;

    constructor() {
        this.vault = {
            homepage: "0",
            backgroundColor: "blue",
            accentColor: "blue"
        };
        this.load();
    }

    ngOnInit() {
        this.load();
    }

    save() {
        window.localStorage.setItem('settings', JSON.stringify(this.vault));
    }

    load() {
        let raw = window.localStorage.getItem('settings');
        if (raw != null) this.vault = JSON.parse(raw);
    }

}

export enum Pages {
    RecentPage, FavoritePage, BrowserPage, OptionsPage
}