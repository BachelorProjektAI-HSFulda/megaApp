import { TestBed, inject } from '@angular/core/testing';
import { SettingsService } from './settings.service';

describe("Settings Service", () => {

    let settings: SettingsService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ SettingsService ]
        });
    });

    beforeEach(inject([SettingsService], s => {
        settings = s;
    }));

    it("Constructs correctly.", () => {
        expect(settings.vault).toBeDefined();
    });

    it("Can save and load values to and from local storage.", () => {
        settings.vault.startPage = 'newTestValue';
        settings.save();
        settings.vault.startPage = 'otherValue';
        expect(settings.vault.startPage).toEqual('otherValue');
        settings.load();
        expect(settings.vault.startPage).toEqual('newTestValue');
    });
});