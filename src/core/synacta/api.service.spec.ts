import { TestBed, inject, async } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { deserialize } from 'json-typescript-mapper';
import { SynactaAPIService } from './api.service';
import { IFrame, Frame, Entity, Container, Document } from './api.objects';

describe("Synacta API Service", () => {

    let service: SynactaAPIService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ HttpModule ],
            providers: [ SynactaAPIService ]
        });
    });

    beforeEach(inject([SynactaAPIService], s => {
        service = s;
    }));

    it("getRoot(): receives an Observable<Container> async object", () => {
        let request;
        request = service.getRoot();
        expect(request instanceof Observable).toEqual(true);
    });
    
    it("getRoot(): subscribing returns a Container object", async(() => {
        service.getRoot().subscribe(response => { 
            expect(response instanceof Container).toEqual(true);
            expect(response.HasChild).toEqual(true);
        });
    }));

    it("getRoot(): the returned object contains correct data in base fields", async(() => {
        service.getRoot().subscribe(response => { 
            expect(response.HasChild).toEqual(true);
            expect(response.ParentID).toEqual("1");
            expect(response.ObjectType).toEqual("Plan");
        });
    }));

    it("getRoot(): the returned object contains correct data in api fields", async(() => {
        service.getRoot().subscribe(response => { 
            expect(response.ReadLink).toEqual(RootJson["@odata.readLink"]);
        });
    }));

    it("getRoot(): contains valid data in the Properties field", async(() => {
        service.getRoot().subscribe(response => {
            expect(response.Properties["Stufe"]).toEqual("Plan");
        });
    }));

    it("getChildren(): receives child elements of an container", async(() => {
        let container: Container = new Container();
        container.ID = "0ba78e68-dd90-4681-96ef-c16015a5d4a1";
        container.ObjectType = "Hauptgruppe";
        service.getChildren(container).subscribe(response => {
            expect(response[0] instanceof Entity).toEqual(true);
            expect(response.length).toEqual(10);
        });
    }));

    it("getChildren(): receives 10 child elements of an container", async(() => {
        let container: Container = new Container();
        container.ID = "0ba78e68-dd90-4681-96ef-c16015a5d4a1";
        container.ObjectType = "Hauptgruppe";
        service.getChildren(container, 5).subscribe(response => {
            expect(response.length).toEqual(5);
        });
    }));
    
});

// JSON Mocks
let RootFrameJson = {
    "@odata.context": "http://synacta.agile-is.de/_api/base/Root",
    "@odata.count": 1,
    "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Root?$level=Full",
    "value": [ 'test' ]
};

let RootJson = {
    "Properties": {
        "Organisation": " ",
        "Stufe": "Plan",
        "Zeichen": "NI.DMS",
        "Bezeichnung": "NI.DMS"
    },
    "PropertyInfos": null,
    "ID": "3df202ad-91b2-413a-9847-d12d536ed813",
    "ObjectType": "Plan",
    "ParentID": "1",
    "ParentType": "Wurzel",
    "IsVirtual": true,
    "Frozen": false,
    "HasChild": true,
    "Hash": "822235546",
    "@odata.readLink": "http://synacta.agile-is.de/_api/base/Plan/3df202ad-91b2-413a-9847-d12d536ed813",
    "Child@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Plan/3df202ad-91b2-413a-9847-d12d536ed813/Children",
    "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Plan/3df202ad-91b2-413a-9847-d12d536ed813?$level=Full"
};

let ContainerJson = {
        "Properties": {
        "Typ": "Akte",
        "Aktenplankennzeichen": "010",
        "Ableitung": "23434",
        "Aktenzeichen": "010/23434",
        "Aktenbetreff": "342424",
        "Schlagwörter": "",
        "Themenverweis": "",
        "Hinweise": "",
        "Weiserzeichen": "",
        "Medium": "Elektronisch",
        "Geheimschutzstufe": "keine",
        "Organisation": "DemoSite",
        "Geschlossen": "",
        "Aussonderung vorgesehen": "",
        "Aussonderungsart": "B - Bewerten",
        "Bewertungsvorschlag": "B - Bewerten",
        "Altsystem Daten": "",
        "Erstellt am": "2016-09-21T16:37:39",
        "Erstellt von": "agile\\bhofmann",
        "Geändert am": "2016-09-21T16:37:39",
        "Geändert von": "agile\\bhofmann"
    },
    "PropertyInfos": null,
    "ID": "68be47b7-0132-4751-b396-46a6d8e441d7",
    "ObjectType": "Akte",
    "ParentID": "4a9c23b4-c89b-4322-8421-adddab50dc8d",
    "ParentType": "Obergruppe",
    "IsVirtual": false,
    "Frozen": false,
    "HasChild": true,
    "Hash": "1521639938",
    "@odata.readLink": "http://synacta.agile-is.de/_api/base/Akte/68be47b7-0132-4751-b396-46a6d8e441d7",
    "Child@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Akte/68be47b7-0132-4751-b396-46a6d8e441d7/Children",
    "Document@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Akte/68be47b7-0132-4751-b396-46a6d8e441d7/Documents",
    "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Akte/68be47b7-0132-4751-b396-46a6d8e441d7?$level=Full"
};

let DocumentJson = {
    "Properties": {
        "Name": "demofile1",
        "Dokumentdatum": "2016-09-27T00:00:00",
        "Schlagwörter": "",
        "Hinweise": "",
        "Mappe": "",
        "Ausgechecked von": "",
        "Weiserzeichen": "",
        "Ausgechecked am": "",
        "Geheimschutzstufe": "",
        "Organisation": "DemoSite",
        "Akte/Vorgang": "010/23434",
        "Dokumentnr.": "2016/00001",
        "Altsystem Daten": "",
        "Erstellt am": "2016-09-27T14:28:40",
        "Erstellt von": "agile\\bhofmann",
        "Geändert am": "2016-09-27T14:28:40",
        "Geändert von": "agile\\bhofmann",
        "Titel": "",
        "Erweiterung": "docx"
    },
    "PropertyInfos": null,
    "ID": "15f02799-10db-4dc0-91e0-576c06ebd35f",
    "ObjectType": "Dokument",
    "ParentID": "68be47b7-0132-4751-b396-46a6d8e441d7",
    "ParentType": "Akte",
    "Frozen": false,
    "CheckedOutBy": "",
    "Version": "1",
    "Hash": "-1909780614",
    "@odata.readLink": "http://synacta.agile-is.de/_api/base/Dokument/15f02799-10db-4dc0-91e0-576c06ebd35f",
    "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Dokument/15f02799-10db-4dc0-91e0-576c06ebd35f?$level=Full"
};

// parent ID = 0ba78e68-dd90-4681-96ef-c16015a5d4a1
// parent Type = Hauptgruppe
let arrayOfEntities = {
  "@odata.context": "http://synacta.agile-is.de/_api/base/Hauptgruppe/0ba78e68-dd90-4681-96ef-c16015a5d4a1/Children",
  "@odata.count": 10,
  "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/0ba78e68-dd90-4681-96ef-c16015a5d4a1/Children?$level=Full",
  "value": [
    {
      "Properties": {
        "Typ": "Akte",
        "Aktenplankennzeichen": "01",
        "Ableitung": "",
        "Aktenzeichen": "01",
        "Aktenbetreff": "Akte Hasenauer",
        "Schlagwörter": "",
        "Themenverweis": "",
        "Hinweise": "",
        "Weiserzeichen": "HW",
        "Medium": "Elektronisch",
        "Geheimschutzstufe": "keine",
        "Organisation": "Hasenauer",
        "Geschlossen": "",
        "Aussonderung vorgesehen": "",
        "Aussonderungsart": "B - Bewerten",
        "Bewertungsvorschlag": "B - Bewerten",
        "Altsystem Daten": "",
        "Erstellt am": "2016-12-09T12:09:53",
        "Erstellt von": "phasenauer@agile-is.de",
        "Geändert am": "2016-12-09T12:09:53",
        "Geändert von": "phasenauer@agile-is.de"
      },
      "PropertyInfos": null,
      "ID": "0ddb0a89-8011-4ea6-8628-7bcb6910a81d",
      "ObjectType": "Akte",
      "ParentID": "0ba78e68-dd90-4681-96ef-c16015a5d4a1",
      "ParentType": "Hauptgruppe",
      "IsVirtual": false,
      "Frozen": false,
      "HasChild": false,
      "Hash": "-1413610552",
      "@odata.readLink": "http://synacta.agile-is.de/_api/base/Akte/0ddb0a89-8011-4ea6-8628-7bcb6910a81d",
      "Child@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Akte/0ddb0a89-8011-4ea6-8628-7bcb6910a81d/Children",
      "Document@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Akte/0ddb0a89-8011-4ea6-8628-7bcb6910a81d/Documents",
      "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Akte/0ddb0a89-8011-4ea6-8628-7bcb6910a81d?$level=Full"
    },
    {
      "Properties": {
        "Organisation": " ",
        "Stufe": "Obergruppe",
        "Zeichen": "010",
        "Bezeichnung": "Über- und außereuropäische Organisationen"
      },
      "PropertyInfos": null,
      "ID": "4a9c23b4-c89b-4322-8421-adddab50dc8d",
      "ObjectType": "Obergruppe",
      "ParentID": "0ba78e68-dd90-4681-96ef-c16015a5d4a1",
      "ParentType": "Hauptgruppe",
      "IsVirtual": true,
      "Frozen": false,
      "HasChild": true,
      "Hash": "-630051585",
      "@odata.readLink": "http://synacta.agile-is.de/_api/base/Obergruppe/4a9c23b4-c89b-4322-8421-adddab50dc8d",
      "Child@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Obergruppe/4a9c23b4-c89b-4322-8421-adddab50dc8d/Children",
      "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Obergruppe/4a9c23b4-c89b-4322-8421-adddab50dc8d?$level=Full"
    },
    {
      "Properties": {
        "Organisation": " ",
        "Stufe": "Obergruppe",
        "Zeichen": "011",
        "Bezeichnung": "Organisation der Ostblockstaaten"
      },
      "PropertyInfos": null,
      "ID": "bb782623-11b1-406f-9168-f6db794552e3",
      "ObjectType": "Obergruppe",
      "ParentID": "0ba78e68-dd90-4681-96ef-c16015a5d4a1",
      "ParentType": "Hauptgruppe",
      "IsVirtual": true,
      "Frozen": false,
      "HasChild": false,
      "Hash": "-471118163",
      "@odata.readLink": "http://synacta.agile-is.de/_api/base/Obergruppe/bb782623-11b1-406f-9168-f6db794552e3",
      "Child@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Obergruppe/bb782623-11b1-406f-9168-f6db794552e3/Children",
      "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Obergruppe/bb782623-11b1-406f-9168-f6db794552e3?$level=Full"
    },
    {
      "Properties": {
        "Organisation": " ",
        "Stufe": "Obergruppe",
        "Zeichen": "012",
        "Bezeichnung": "Europäische Organisationen"
      },
      "PropertyInfos": null,
      "ID": "9adc4162-5eae-4eb9-b713-322a2f72b23e",
      "ObjectType": "Obergruppe",
      "ParentID": "0ba78e68-dd90-4681-96ef-c16015a5d4a1",
      "ParentType": "Hauptgruppe",
      "IsVirtual": true,
      "Frozen": false,
      "HasChild": true,
      "Hash": "1803426494",
      "@odata.readLink": "http://synacta.agile-is.de/_api/base/Obergruppe/9adc4162-5eae-4eb9-b713-322a2f72b23e",
      "Child@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Obergruppe/9adc4162-5eae-4eb9-b713-322a2f72b23e/Children",
      "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Obergruppe/9adc4162-5eae-4eb9-b713-322a2f72b23e?$level=Full"
    },
    {
      "Properties": {
        "Organisation": " ",
        "Stufe": "Obergruppe",
        "Zeichen": "013",
        "Bezeichnung": "Bund und Länder"
      },
      "PropertyInfos": null,
      "ID": "7a2af470-36f6-4b64-bbf7-eef72b3e23cd",
      "ObjectType": "Obergruppe",
      "ParentID": "0ba78e68-dd90-4681-96ef-c16015a5d4a1",
      "ParentType": "Hauptgruppe",
      "IsVirtual": true,
      "Frozen": false,
      "HasChild": true,
      "Hash": "-2072177726",
      "@odata.readLink": "http://synacta.agile-is.de/_api/base/Obergruppe/7a2af470-36f6-4b64-bbf7-eef72b3e23cd",
      "Child@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Obergruppe/7a2af470-36f6-4b64-bbf7-eef72b3e23cd/Children",
      "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Obergruppe/7a2af470-36f6-4b64-bbf7-eef72b3e23cd?$level=Full"
    },
    {
      "Properties": {
        "Organisation": " ",
        "Stufe": "Obergruppe",
        "Zeichen": "014",
        "Bezeichnung": "Organisation und Verfassung des Landes"
      },
      "PropertyInfos": null,
      "ID": "19f47cb0-7d18-42dc-ab27-c5d8dede9c8f",
      "ObjectType": "Obergruppe",
      "ParentID": "0ba78e68-dd90-4681-96ef-c16015a5d4a1",
      "ParentType": "Hauptgruppe",
      "IsVirtual": true,
      "Frozen": false,
      "HasChild": true,
      "Hash": "1575885681",
      "@odata.readLink": "http://synacta.agile-is.de/_api/base/Obergruppe/19f47cb0-7d18-42dc-ab27-c5d8dede9c8f",
      "Child@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Obergruppe/19f47cb0-7d18-42dc-ab27-c5d8dede9c8f/Children",
      "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Obergruppe/19f47cb0-7d18-42dc-ab27-c5d8dede9c8f?$level=Full"
    },
    {
      "Properties": {
        "Organisation": " ",
        "Stufe": "Obergruppe",
        "Zeichen": "015",
        "Bezeichnung": "Verwaltung des Landes (Kommunalverwaltung siehe 016)"
      },
      "PropertyInfos": null,
      "ID": "2fc84f41-a6c6-4ca1-b104-24060e170f27",
      "ObjectType": "Obergruppe",
      "ParentID": "0ba78e68-dd90-4681-96ef-c16015a5d4a1",
      "ParentType": "Hauptgruppe",
      "IsVirtual": true,
      "Frozen": false,
      "HasChild": true,
      "Hash": "-643987324",
      "@odata.readLink": "http://synacta.agile-is.de/_api/base/Obergruppe/2fc84f41-a6c6-4ca1-b104-24060e170f27",
      "Child@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Obergruppe/2fc84f41-a6c6-4ca1-b104-24060e170f27/Children",
      "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Obergruppe/2fc84f41-a6c6-4ca1-b104-24060e170f27?$level=Full"
    },
    {
      "Properties": {
        "Organisation": " ",
        "Stufe": "Obergruppe",
        "Zeichen": "016",
        "Bezeichnung": "Kommunalverwaltung in Niedersachsen"
      },
      "PropertyInfos": null,
      "ID": "25536cef-2091-4068-9ee5-98c027f1b093",
      "ObjectType": "Obergruppe",
      "ParentID": "0ba78e68-dd90-4681-96ef-c16015a5d4a1",
      "ParentType": "Hauptgruppe",
      "IsVirtual": true,
      "Frozen": false,
      "HasChild": true,
      "Hash": "625642150",
      "@odata.readLink": "http://synacta.agile-is.de/_api/base/Obergruppe/25536cef-2091-4068-9ee5-98c027f1b093",
      "Child@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Obergruppe/25536cef-2091-4068-9ee5-98c027f1b093/Children",
      "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Obergruppe/25536cef-2091-4068-9ee5-98c027f1b093?$level=Full"
    },
    {
      "Properties": {
        "Organisation": " ",
        "Stufe": "Obergruppe",
        "Zeichen": "017",
        "Bezeichnung": "Außerstaatliche Einrichtungen"
      },
      "PropertyInfos": null,
      "ID": "864523f2-16b8-4a24-8955-c183accf12ec",
      "ObjectType": "Obergruppe",
      "ParentID": "0ba78e68-dd90-4681-96ef-c16015a5d4a1",
      "ParentType": "Hauptgruppe",
      "IsVirtual": true,
      "Frozen": false,
      "HasChild": true,
      "Hash": "-1760194102",
      "@odata.readLink": "http://synacta.agile-is.de/_api/base/Obergruppe/864523f2-16b8-4a24-8955-c183accf12ec",
      "Child@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Obergruppe/864523f2-16b8-4a24-8955-c183accf12ec/Children",
      "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Obergruppe/864523f2-16b8-4a24-8955-c183accf12ec?$level=Full"
    },
    {
      "Properties": {
        "Organisation": " ",
        "Stufe": "Obergruppe",
        "Zeichen": "019",
        "Bezeichnung": "Verwaltung des Landes - Fortsetzung von 015 -"
      },
      "PropertyInfos": null,
      "ID": "3f620a3b-60ab-488c-a4bb-58a1ca152abc",
      "ObjectType": "Obergruppe",
      "ParentID": "0ba78e68-dd90-4681-96ef-c16015a5d4a1",
      "ParentType": "Hauptgruppe",
      "IsVirtual": true,
      "Frozen": false,
      "HasChild": true,
      "Hash": "1860817156",
      "@odata.readLink": "http://synacta.agile-is.de/_api/base/Obergruppe/3f620a3b-60ab-488c-a4bb-58a1ca152abc",
      "Child@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Obergruppe/3f620a3b-60ab-488c-a4bb-58a1ca152abc/Children",
      "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Obergruppe/3f620a3b-60ab-488c-a4bb-58a1ca152abc?$level=Full"
    }
  ]
};