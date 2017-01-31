import { Injectable, OnInit } from '@angular/core';

import { FavoritePage } from '../../pages/favorite/favorite';
import { BrowserPage } from '../../pages/browser/browser';
import { RecentPage } from '../../pages/recent/recent';
import { OptionsPage } from '../../pages/options/options';
import { TabsPage } from '../../pages/tabs/tabs';

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

    getHomepage(): any {
        if (this.vault.homepage == Pages.RecentPage) return RecentPage;
        if (this.vault.homepage == Pages.BrowserPage) return BrowserPage;
        if (this.vault.homepage == Pages.FavoritePage) return FavoritePage;
        if (this.vault.homepage == Pages.OptionsPage) return OptionsPage;
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