import { Injectable } from '@angular/core';

export interface Settings {
    startPage: string;
    background: Color;
    accent: Color;
    view: boolean;
}

@Injectable()
export class SettingsService {

    vault: Settings;

    constructor() {
        this.vault = {
            startPage: 'RecentPage',
            background: Color.Blue,
            accent: Color.Black,
            view: false,
        };
    }

    save() {
        window.localStorage.setItem('settings', JSON.stringify(this.vault));
    }

    load() {
        if(!window.localStorage.getItem('settings')){
          this.save();
        }
        this.vault = JSON.parse(window.localStorage.getItem('settings'));
    }

}

export enum Color {
    Blue, Black, White
}
