
/// <reference path="../../typings/globals/jasmine/index.d.ts" />

import { IEntity, IBaseEntityFrame, IContainer, IDocument } from '../core/synacta/api.objects';

describe("api interfaces", () => {

    it("map json correctly to IBaseEntityFrame interface", () => {
        let frame: IBaseEntityFrame<any>;
        frame = RootFrameJson;

        // Test Frame - Interface-Access
        expect(frame.value).toEqual([ 'test' ]);
        // Test Frame - Bracket-Access
        expect(frame["@odata.count"]).toEqual(1);
    });

    it("map json correctly to IContainer interface", () => {
        let container: IContainer;
        container = ContainerJson;

        // Test RootJson - Interface-Access
        expect(container.ID).toEqual(ContainerJson.ID);
        // Test RootJson - Bracket-Access
        expect(container["@odata.readLink"]).toEqual("http://synacta.agile-is.de/_api/base/Akte/68be47b7-0132-4751-b396-46a6d8e441d7");
    });

    it("map json correctly to IDocument interface", () => {
        let document: IDocument;
        document = DocumentJson;

        // Test Document - Interface-Access
        expect(document.Version).toEqual(DocumentJson.Version);
        // Test Document - Bracket-Access
        expect(document["FullODataLink@odata.navigationLink"]).toEqual("http://synacta.agile-is.de/_api/base/Dokument/15f02799-10db-4dc0-91e0-576c06ebd35f?$level=Full");

    });
    
});

// JSON Mocks
let RootFrameJson = {
    "@odata.context": "http://synacta.agile-is.de/_api/base/Root",
    "@odata.count": 1,
    "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Root?$level=Full",
    "value": [ 'test' ]
}

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
}

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
}

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
}