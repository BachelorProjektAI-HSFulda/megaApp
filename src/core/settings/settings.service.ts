import { Injectable } from '@angular/core';

export interface Settings {
    startPage: string;
    background: Color;
    accent: Color;
}

@Injectable()
export class SettingsService {

    vault: Settings;

    constructor() {
        this.vault = { 
            startPage: 'RecentPage',
            background: Color.Blue,
            accent: Color.Black
        };
    }

    save() {
        window.localStorage.setItem('settings', JSON.stringify(this.vault));
    }

    load() {
        this.vault = JSON.parse(window.localStorage.getItem('settings'));
    }

}

export enum Color {
    Blue, Black, White
}