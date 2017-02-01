import { TestBed, inject } from '@angular/core/testing';
import { SettingsService } from './settings.service';

import { FavoritePage } from '../../pages/favorite/favorite';
import { BrowserPage } from '../../pages/browser/browser';
import { RecentPage } from '../../pages/recent/recent';
import { OptionsPage } from '../../pages/options/options';
import { TabsPage } from '../../pages/tabs/tabs';

describe("Settings Service", () => {

    let settings: SettingsService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                FavoritePage,
                BrowserPage,
                RecentPage,
                OptionsPage,
                TabsPage
            ],
            providers: [ SettingsService ]
        });
    });

    beforeEach(inject([SettingsService], s => {
        settings = s;
    }));

    it("Constructs correctly.", () => {
        expect(settings.vault).toBeDefined();
        //expect(settings.vault.accentColor).toBeDefined();
    });

    /*it("Updates values in the vault.", () => {
        settings.vault.accentColor = 'red';
        expect(settings.vault.accentColor).toEqual('red');
    });*/

    it("Can save and load values to and from local storage.", () => {
        settings.vault.homepage = '0';
        settings.save();
        settings.vault.homepage = '1';
        expect(settings.vault.homepage).toEqual('1');
        settings.load();
        expect(settings.vault.homepage).toEqual('0');
    });
});