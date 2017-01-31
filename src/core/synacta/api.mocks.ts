export const MockRootValue = {
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

// Request-URL
// https://synacta.agile-is.de/_api/base/Root
export const MockRootFrame = {
    "@odata.context": "http://synacta.agile-is.de/_api/base/Root",
    "@odata.count": 1,
    "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Root?$level=Full",
    "value": [ MockRootValue ]
};

export const MockContainer = {
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

export let MockDocument = {
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
export const MockArrayOf5Entities = {
  "@odata.context": "http://synacta.agile-is.de/_api/base/Hauptgruppe/0ba78e68-dd90-4681-96ef-c16015a5d4a1/Children",
  "@odata.count": 5,
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
    }
  ]
};

export const MockArrayOf10Entities = {
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

export const Mock4BeginningAt5 = {
  "@odata.context": "http://synacta.agile-is.de/_api/base/Hauptgruppe/0ba78e68-dd90-4681-96ef-c16015a5d4a1/Children",
  "@odata.count": 4,
  "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/0ba78e68-dd90-4681-96ef-c16015a5d4a1/Children?$level=Full",
  "value": [
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
  ]
};

// Request-URL
// https://synacta.agile-is.de/_api/base/Plan/3df202ad-91b2-413a-9847-d12d536ed813/Children
export const MockRootChildResponse = {
  "@odata.context": "http://synacta.agile-is.de/_api/base/Plan/3df202ad-91b2-413a-9847-d12d536ed813/Children",
  "@odata.count": 72,
  "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Plan/3df202ad-91b2-413a-9847-d12d536ed813/Children?$level=Full",
  "value": [
    {
      "Properties": {
        "Organisation": " ",
        "Stufe": "Hauptgruppe",
        "Zeichen": "01",
        "Bezeichnung": "Äußere Organisation, Verfassung"
      },
      "PropertyInfos": null,
      "ID": "0ba78e68-dd90-4681-96ef-c16015a5d4a1",
      "ObjectType": "Hauptgruppe",
      "ParentID": "3df202ad-91b2-413a-9847-d12d536ed813",
      "ParentType": "Plan",
      "IsVirtual": true,
      "Frozen": false,
      "HasChild": true,
      "Hash": "1878782434",
      "@odata.readLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/0ba78e68-dd90-4681-96ef-c16015a5d4a1",
      "Child@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/0ba78e68-dd90-4681-96ef-c16015a5d4a1/Children",
      "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/0ba78e68-dd90-4681-96ef-c16015a5d4a1?$level=Full"
    },
    {
      "Properties": {
        "Organisation": " ",
        "Stufe": "Hauptgruppe",
        "Zeichen": "02",
        "Bezeichnung": "Innere Organisation, allgemeine Verwaltungsangelegenheiten"
      },
      "PropertyInfos": null,
      "ID": "bf88d914-a31a-4cd9-bef2-24d13709acdf",
      "ObjectType": "Hauptgruppe",
      "ParentID": "3df202ad-91b2-413a-9847-d12d536ed813",
      "ParentType": "Plan",
      "IsVirtual": true,
      "Frozen": false,
      "HasChild": true,
      "Hash": "1739170130",
      "@odata.readLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/bf88d914-a31a-4cd9-bef2-24d13709acdf",
      "Child@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/bf88d914-a31a-4cd9-bef2-24d13709acdf/Children",
      "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/bf88d914-a31a-4cd9-bef2-24d13709acdf?$level=Full"
    },
    {
      "Properties": {
        "Organisation": " ",
        "Stufe": "Hauptgruppe",
        "Zeichen": "03",
        "Bezeichnung": "Personalangelegenheiten"
      },
      "PropertyInfos": null,
      "ID": "39e46da4-5422-4d6f-b773-8516ab6bced7",
      "ObjectType": "Hauptgruppe",
      "ParentID": "3df202ad-91b2-413a-9847-d12d536ed813",
      "ParentType": "Plan",
      "IsVirtual": true,
      "Frozen": false,
      "HasChild": true,
      "Hash": "-1399408840",
      "@odata.readLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/39e46da4-5422-4d6f-b773-8516ab6bced7",
      "Child@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/39e46da4-5422-4d6f-b773-8516ab6bced7/Children",
      "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/39e46da4-5422-4d6f-b773-8516ab6bced7?$level=Full"
    },
    {
      "Properties": {
        "Organisation": " ",
        "Stufe": "Hauptgruppe",
        "Zeichen": "04",
        "Bezeichnung": "Haushalts-, Kassen- und Rechnungswesen"
      },
      "PropertyInfos": null,
      "ID": "cf411ae6-6d8e-4ea3-92f7-af943fcfd413",
      "ObjectType": "Hauptgruppe",
      "ParentID": "3df202ad-91b2-413a-9847-d12d536ed813",
      "ParentType": "Plan",
      "IsVirtual": true,
      "Frozen": false,
      "HasChild": true,
      "Hash": "1362849063",
      "@odata.readLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/cf411ae6-6d8e-4ea3-92f7-af943fcfd413",
      "Child@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/cf411ae6-6d8e-4ea3-92f7-af943fcfd413/Children",
      "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/cf411ae6-6d8e-4ea3-92f7-af943fcfd413?$level=Full"
    },
    {
      "Properties": {
        "Organisation": " ",
        "Stufe": "Hauptgruppe",
        "Zeichen": "05",
        "Bezeichnung": "Allgemeine Rechtsangelegenheiten"
      },
      "PropertyInfos": null,
      "ID": "344c1070-3434-477d-a4d0-8202b2bc17d6",
      "ObjectType": "Hauptgruppe",
      "ParentID": "3df202ad-91b2-413a-9847-d12d536ed813",
      "ParentType": "Plan",
      "IsVirtual": true,
      "Frozen": false,
      "HasChild": true,
      "Hash": "917342283",
      "@odata.readLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/344c1070-3434-477d-a4d0-8202b2bc17d6",
      "Child@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/344c1070-3434-477d-a4d0-8202b2bc17d6/Children",
      "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/344c1070-3434-477d-a4d0-8202b2bc17d6?$level=Full"
    },
    {
      "Properties": {
        "Organisation": " ",
        "Stufe": "Hauptgruppe",
        "Zeichen": "06",
        "Bezeichnung": "Übergreifende Planungsangelegenheiten, Planungsmethoden"
      },
      "PropertyInfos": null,
      "ID": "7bd3c420-025b-4dee-a2ce-5dd5a77319c8",
      "ObjectType": "Hauptgruppe",
      "ParentID": "3df202ad-91b2-413a-9847-d12d536ed813",
      "ParentType": "Plan",
      "IsVirtual": true,
      "Frozen": false,
      "HasChild": true,
      "Hash": "1656041417",
      "@odata.readLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/7bd3c420-025b-4dee-a2ce-5dd5a77319c8",
      "Child@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/7bd3c420-025b-4dee-a2ce-5dd5a77319c8/Children",
      "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/7bd3c420-025b-4dee-a2ce-5dd5a77319c8?$level=Full"
    },
    {
      "Properties": {
        "Organisation": " ",
        "Stufe": "Hauptgruppe",
        "Zeichen": "10",
        "Bezeichnung": "Kommunal-und Sparkassenangelegenheiten, Kommunalprüfungswesen, öffentlich-rechtliche Versicherungen"
      },
      "PropertyInfos": null,
      "ID": "ad38e2cf-a740-46ca-a04a-064ce948b1bd",
      "ObjectType": "Hauptgruppe",
      "ParentID": "3df202ad-91b2-413a-9847-d12d536ed813",
      "ParentType": "Plan",
      "IsVirtual": true,
      "Frozen": false,
      "HasChild": true,
      "Hash": "268864031",
      "@odata.readLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/ad38e2cf-a740-46ca-a04a-064ce948b1bd",
      "Child@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/ad38e2cf-a740-46ca-a04a-064ce948b1bd/Children",
      "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/ad38e2cf-a740-46ca-a04a-064ce948b1bd?$level=Full"
    },
    {
      "Properties": {
        "Organisation": " ",
        "Stufe": "Hauptgruppe",
        "Zeichen": "11",
        "Bezeichnung": "Hoheitsangelegenheiten"
      },
      "PropertyInfos": null,
      "ID": "2f1ca97a-3d6d-475d-8e23-8890f70235c4",
      "ObjectType": "Hauptgruppe",
      "ParentID": "3df202ad-91b2-413a-9847-d12d536ed813",
      "ParentType": "Plan",
      "IsVirtual": true,
      "Frozen": false,
      "HasChild": true,
      "Hash": "2105004085",
      "@odata.readLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/2f1ca97a-3d6d-475d-8e23-8890f70235c4",
      "Child@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/2f1ca97a-3d6d-475d-8e23-8890f70235c4/Children",
      "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/2f1ca97a-3d6d-475d-8e23-8890f70235c4?$level=Full"
    },
    {
      "Properties": {
        "Organisation": " ",
        "Stufe": "Hauptgruppe",
        "Zeichen": "12",
        "Bezeichnung": "Öffentliche Sicherheit und Ordnung"
      },
      "PropertyInfos": null,
      "ID": "8591e10c-8db2-473c-a551-5100afa2886e",
      "ObjectType": "Hauptgruppe",
      "ParentID": "3df202ad-91b2-413a-9847-d12d536ed813",
      "ParentType": "Plan",
      "IsVirtual": true,
      "Frozen": false,
      "HasChild": true,
      "Hash": "1228421856",
      "@odata.readLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/8591e10c-8db2-473c-a551-5100afa2886e",
      "Child@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/8591e10c-8db2-473c-a551-5100afa2886e/Children",
      "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/8591e10c-8db2-473c-a551-5100afa2886e?$level=Full"
    },
    {
      "Properties": {
        "Organisation": " ",
        "Stufe": "Hauptgruppe",
        "Zeichen": "13",
        "Bezeichnung": "Brandschutz und Hilfeleistung"
      },
      "PropertyInfos": null,
      "ID": "55cf735c-0a9a-4f8a-8b67-3c8d68523975",
      "ObjectType": "Hauptgruppe",
      "ParentID": "3df202ad-91b2-413a-9847-d12d536ed813",
      "ParentType": "Plan",
      "IsVirtual": true,
      "Frozen": false,
      "HasChild": true,
      "Hash": "570794490",
      "@odata.readLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/55cf735c-0a9a-4f8a-8b67-3c8d68523975",
      "Child@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/55cf735c-0a9a-4f8a-8b67-3c8d68523975/Children",
      "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/55cf735c-0a9a-4f8a-8b67-3c8d68523975?$level=Full"
    },
    {
      "Properties": {
        "Organisation": " ",
        "Stufe": "Hauptgruppe",
        "Zeichen": "14",
        "Bezeichnung": "Zivile Verteidigung, Katastrophenschutz"
      },
      "PropertyInfos": null,
      "ID": "4731d0eb-aeb3-46c7-8f7b-13a263177f40",
      "ObjectType": "Hauptgruppe",
      "ParentID": "3df202ad-91b2-413a-9847-d12d536ed813",
      "ParentType": "Plan",
      "IsVirtual": true,
      "Frozen": false,
      "HasChild": true,
      "Hash": "-1555096420",
      "@odata.readLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/4731d0eb-aeb3-46c7-8f7b-13a263177f40",
      "Child@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/4731d0eb-aeb3-46c7-8f7b-13a263177f40/Children",
      "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/4731d0eb-aeb3-46c7-8f7b-13a263177f40?$level=Full"
    },
    {
      "Properties": {
        "Organisation": " ",
        "Stufe": "Hauptgruppe",
        "Zeichen": "15",
        "Bezeichnung": "Angelegenheiten der militärischen Verteidigung und des Bundesgrenzschutzes"
      },
      "PropertyInfos": null,
      "ID": "d4da5af7-76ed-468b-a193-afb88e9c13ce",
      "ObjectType": "Hauptgruppe",
      "ParentID": "3df202ad-91b2-413a-9847-d12d536ed813",
      "ParentType": "Plan",
      "IsVirtual": true,
      "Frozen": false,
      "HasChild": true,
      "Hash": "103268363",
      "@odata.readLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/d4da5af7-76ed-468b-a193-afb88e9c13ce",
      "Child@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/d4da5af7-76ed-468b-a193-afb88e9c13ce/Children",
      "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/d4da5af7-76ed-468b-a193-afb88e9c13ce?$level=Full"
    },
    {
      "Properties": {
        "Organisation": " ",
        "Stufe": "Hauptgruppe",
        "Zeichen": "16",
        "Bezeichnung": "Verteidigungslasten"
      },
      "PropertyInfos": null,
      "ID": "e4b4589b-b9d5-4961-979c-64d0ca39e003",
      "ObjectType": "Hauptgruppe",
      "ParentID": "3df202ad-91b2-413a-9847-d12d536ed813",
      "ParentType": "Plan",
      "IsVirtual": true,
      "Frozen": false,
      "HasChild": true,
      "Hash": "-2125369010",
      "@odata.readLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/e4b4589b-b9d5-4961-979c-64d0ca39e003",
      "Child@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/e4b4589b-b9d5-4961-979c-64d0ca39e003/Children",
      "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/e4b4589b-b9d5-4961-979c-64d0ca39e003?$level=Full"
    },
    {
      "Properties": {
        "Organisation": " ",
        "Stufe": "Hauptgruppe",
        "Zeichen": "18",
        "Bezeichnung": "Verfassungsschutz, Geheimschutz"
      },
      "PropertyInfos": null,
      "ID": "987c8c24-31e9-44cb-9ecd-645f7da50d2b",
      "ObjectType": "Hauptgruppe",
      "ParentID": "3df202ad-91b2-413a-9847-d12d536ed813",
      "ParentType": "Plan",
      "IsVirtual": true,
      "Frozen": false,
      "HasChild": true,
      "Hash": "-1301220848",
      "@odata.readLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/987c8c24-31e9-44cb-9ecd-645f7da50d2b",
      "Child@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/987c8c24-31e9-44cb-9ecd-645f7da50d2b/Children",
      "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/987c8c24-31e9-44cb-9ecd-645f7da50d2b?$level=Full"
    },
    {
      "Properties": {
        "Organisation": " ",
        "Stufe": "Hauptgruppe",
        "Zeichen": "19",
        "Bezeichnung": "Statistik"
      },
      "PropertyInfos": null,
      "ID": "de804913-e71a-4e16-9cbb-420c1bb86725",
      "ObjectType": "Hauptgruppe",
      "ParentID": "3df202ad-91b2-413a-9847-d12d536ed813",
      "ParentType": "Plan",
      "IsVirtual": true,
      "Frozen": false,
      "HasChild": true,
      "Hash": "1768189868",
      "@odata.readLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/de804913-e71a-4e16-9cbb-420c1bb86725",
      "Child@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/de804913-e71a-4e16-9cbb-420c1bb86725/Children",
      "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/de804913-e71a-4e16-9cbb-420c1bb86725?$level=Full"
    },
    {
      "Properties": {
        "Organisation": " ",
        "Stufe": "Hauptgruppe",
        "Zeichen": "20",
        "Bezeichnung": "Raumordnung, Landesplanung und Landeskunde"
      },
      "PropertyInfos": null,
      "ID": "b6844152-7a45-4bd1-bdce-9d3fe25b96e3",
      "ObjectType": "Hauptgruppe",
      "ParentID": "3df202ad-91b2-413a-9847-d12d536ed813",
      "ParentType": "Plan",
      "IsVirtual": true,
      "Frozen": false,
      "HasChild": true,
      "Hash": "1966655156",
      "@odata.readLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/b6844152-7a45-4bd1-bdce-9d3fe25b96e3",
      "Child@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/b6844152-7a45-4bd1-bdce-9d3fe25b96e3/Children",
      "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/b6844152-7a45-4bd1-bdce-9d3fe25b96e3?$level=Full"
    },
    {
      "Properties": {
        "Organisation": " ",
        "Stufe": "Hauptgruppe",
        "Zeichen": "21",
        "Bezeichnung": "Städtebau"
      },
      "PropertyInfos": null,
      "ID": "86713db8-0bb7-402e-a724-bf47619bfb12",
      "ObjectType": "Hauptgruppe",
      "ParentID": "3df202ad-91b2-413a-9847-d12d536ed813",
      "ParentType": "Plan",
      "IsVirtual": true,
      "Frozen": false,
      "HasChild": true,
      "Hash": "-118983854",
      "@odata.readLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/86713db8-0bb7-402e-a724-bf47619bfb12",
      "Child@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/86713db8-0bb7-402e-a724-bf47619bfb12/Children",
      "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/86713db8-0bb7-402e-a724-bf47619bfb12?$level=Full"
    },
    {
      "Properties": {
        "Organisation": " ",
        "Stufe": "Hauptgruppe",
        "Zeichen": "22",
        "Bezeichnung": "Naturschutz und Landschaftspflege"
      },
      "PropertyInfos": null,
      "ID": "261cc510-431d-42b5-a9ae-57ed82ff71a2",
      "ObjectType": "Hauptgruppe",
      "ParentID": "3df202ad-91b2-413a-9847-d12d536ed813",
      "ParentType": "Plan",
      "IsVirtual": true,
      "Frozen": false,
      "HasChild": true,
      "Hash": "-1043125085",
      "@odata.readLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/261cc510-431d-42b5-a9ae-57ed82ff71a2",
      "Child@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/261cc510-431d-42b5-a9ae-57ed82ff71a2/Children",
      "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/261cc510-431d-42b5-a9ae-57ed82ff71a2?$level=Full"
    },
    {
      "Properties": {
        "Organisation": " ",
        "Stufe": "Hauptgruppe",
        "Zeichen": "23",
        "Bezeichnung": "Vermessung und Liegenschaftskataster"
      },
      "PropertyInfos": null,
      "ID": "07912dda-2d9f-482b-a78c-bbe0a96c93ce",
      "ObjectType": "Hauptgruppe",
      "ParentID": "3df202ad-91b2-413a-9847-d12d536ed813",
      "ParentType": "Plan",
      "IsVirtual": true,
      "Frozen": false,
      "HasChild": true,
      "Hash": "7697887",
      "@odata.readLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/07912dda-2d9f-482b-a78c-bbe0a96c93ce",
      "Child@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/07912dda-2d9f-482b-a78c-bbe0a96c93ce/Children",
      "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/07912dda-2d9f-482b-a78c-bbe0a96c93ce?$level=Full"
    },
    {
      "Properties": {
        "Organisation": " ",
        "Stufe": "Hauptgruppe",
        "Zeichen": "24",
        "Bezeichnung": "Bauaufsicht"
      },
      "PropertyInfos": null,
      "ID": "b4d260d4-b3b9-4a15-b14c-6f9bb516aeeb",
      "ObjectType": "Hauptgruppe",
      "ParentID": "3df202ad-91b2-413a-9847-d12d536ed813",
      "ParentType": "Plan",
      "IsVirtual": true,
      "Frozen": false,
      "HasChild": true,
      "Hash": "2125791544",
      "@odata.readLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/b4d260d4-b3b9-4a15-b14c-6f9bb516aeeb",
      "Child@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/b4d260d4-b3b9-4a15-b14c-6f9bb516aeeb/Children",
      "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/b4d260d4-b3b9-4a15-b14c-6f9bb516aeeb?$level=Full"
    },
    {
      "Properties": {
        "Organisation": " ",
        "Stufe": "Hauptgruppe",
        "Zeichen": "25",
        "Bezeichnung": "Wohnungsbau, Wohnungswesen"
      },
      "PropertyInfos": null,
      "ID": "519d58f8-5e54-412a-9962-b21ac46cdd99",
      "ObjectType": "Hauptgruppe",
      "ParentID": "3df202ad-91b2-413a-9847-d12d536ed813",
      "ParentType": "Plan",
      "IsVirtual": true,
      "Frozen": false,
      "HasChild": true,
      "Hash": "-763265617",
      "@odata.readLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/519d58f8-5e54-412a-9962-b21ac46cdd99",
      "Child@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/519d58f8-5e54-412a-9962-b21ac46cdd99/Children",
      "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/519d58f8-5e54-412a-9962-b21ac46cdd99?$level=Full"
    },
    {
      "Properties": {
        "Organisation": " ",
        "Stufe": "Hauptgruppe",
        "Zeichen": "26",
        "Bezeichnung": "Staatliches Baumanagement"
      },
      "PropertyInfos": null,
      "ID": "abb3b0f8-290d-43d2-a8cd-f6eda447161a",
      "ObjectType": "Hauptgruppe",
      "ParentID": "3df202ad-91b2-413a-9847-d12d536ed813",
      "ParentType": "Plan",
      "IsVirtual": true,
      "Frozen": false,
      "HasChild": true,
      "Hash": "-194254420",
      "@odata.readLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/abb3b0f8-290d-43d2-a8cd-f6eda447161a",
      "Child@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/abb3b0f8-290d-43d2-a8cd-f6eda447161a/Children",
      "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/abb3b0f8-290d-43d2-a8cd-f6eda447161a?$level=Full"
    },
    {
      "Properties": {
        "Organisation": " ",
        "Stufe": "Hauptgruppe",
        "Zeichen": "27",
        "Bezeichnung": "Staatlicher Grundbesitz, Vermögen, Stiftungen des öffentlichen Rechts, Klöster, Stifte, Staatsbäder"
      },
      "PropertyInfos": null,
      "ID": "dc4336bc-3121-4283-bf8c-5d458df4c8c2",
      "ObjectType": "Hauptgruppe",
      "ParentID": "3df202ad-91b2-413a-9847-d12d536ed813",
      "ParentType": "Plan",
      "IsVirtual": true,
      "Frozen": false,
      "HasChild": true,
      "Hash": "212900671",
      "@odata.readLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/dc4336bc-3121-4283-bf8c-5d458df4c8c2",
      "Child@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/dc4336bc-3121-4283-bf8c-5d458df4c8c2/Children",
      "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/dc4336bc-3121-4283-bf8c-5d458df4c8c2?$level=Full"
    },
    {
      "Properties": {
        "Organisation": " ",
        "Stufe": "Hauptgruppe",
        "Zeichen": "28",
        "Bezeichnung": "Bodenschutz"
      },
      "PropertyInfos": null,
      "ID": "1902f636-ef8d-4997-9416-798503fa0594",
      "ObjectType": "Hauptgruppe",
      "ParentID": "3df202ad-91b2-413a-9847-d12d536ed813",
      "ParentType": "Plan",
      "IsVirtual": true,
      "Frozen": false,
      "HasChild": true,
      "Hash": "1548721180",
      "@odata.readLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/1902f636-ef8d-4997-9416-798503fa0594",
      "Child@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/1902f636-ef8d-4997-9416-798503fa0594/Children",
      "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/1902f636-ef8d-4997-9416-798503fa0594?$level=Full"
    },
    {
      "Properties": {
        "Organisation": " ",
        "Stufe": "Hauptgruppe",
        "Zeichen": "29",
        "Bezeichnung": "Energie, Klimaschutz, Klimafolgen, Nachhaltigkeit"
      },
      "PropertyInfos": null,
      "ID": "3512ee8b-ce8a-40ba-9c48-d4f9e53fd03e",
      "ObjectType": "Hauptgruppe",
      "ParentID": "3df202ad-91b2-413a-9847-d12d536ed813",
      "ParentType": "Plan",
      "IsVirtual": true,
      "Frozen": false,
      "HasChild": true,
      "Hash": "1054963706",
      "@odata.readLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/3512ee8b-ce8a-40ba-9c48-d4f9e53fd03e",
      "Child@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/3512ee8b-ce8a-40ba-9c48-d4f9e53fd03e/Children",
      "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/3512ee8b-ce8a-40ba-9c48-d4f9e53fd03e?$level=Full"
    },
    {
      "Properties": {
        "Organisation": " ",
        "Stufe": "Hauptgruppe",
        "Zeichen": "30",
        "Bezeichnung": "Verkehr"
      },
      "PropertyInfos": null,
      "ID": "5d281505-9197-4970-b63c-f1b3ad516e77",
      "ObjectType": "Hauptgruppe",
      "ParentID": "3df202ad-91b2-413a-9847-d12d536ed813",
      "ParentType": "Plan",
      "IsVirtual": true,
      "Frozen": false,
      "HasChild": true,
      "Hash": "736646159",
      "@odata.readLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/5d281505-9197-4970-b63c-f1b3ad516e77",
      "Child@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/5d281505-9197-4970-b63c-f1b3ad516e77/Children",
      "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/5d281505-9197-4970-b63c-f1b3ad516e77?$level=Full"
    },
    {
      "Properties": {
        "Organisation": " ",
        "Stufe": "Hauptgruppe",
        "Zeichen": "31",
        "Bezeichnung": "Straßen und Wege"
      },
      "PropertyInfos": null,
      "ID": "b74e70a1-2032-46ed-9fb2-5994acef731b",
      "ObjectType": "Hauptgruppe",
      "ParentID": "3df202ad-91b2-413a-9847-d12d536ed813",
      "ParentType": "Plan",
      "IsVirtual": true,
      "Frozen": false,
      "HasChild": true,
      "Hash": "644180014",
      "@odata.readLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/b74e70a1-2032-46ed-9fb2-5994acef731b",
      "Child@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/b74e70a1-2032-46ed-9fb2-5994acef731b/Children",
      "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/b74e70a1-2032-46ed-9fb2-5994acef731b?$level=Full"
    },
    {
      "Properties": {
        "Organisation": " ",
        "Stufe": "Hauptgruppe",
        "Zeichen": "32",
        "Bezeichnung": "Gewerbliche Wirtschaft"
      },
      "PropertyInfos": null,
      "ID": "7e2d2631-b45a-4329-9a2e-75ffeb9bfa4e",
      "ObjectType": "Hauptgruppe",
      "ParentID": "3df202ad-91b2-413a-9847-d12d536ed813",
      "ParentType": "Plan",
      "IsVirtual": true,
      "Frozen": false,
      "HasChild": true,
      "Hash": "-955028893",
      "@odata.readLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/7e2d2631-b45a-4329-9a2e-75ffeb9bfa4e",
      "Child@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/7e2d2631-b45a-4329-9a2e-75ffeb9bfa4e/Children",
      "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/7e2d2631-b45a-4329-9a2e-75ffeb9bfa4e?$level=Full"
    },
    {
      "Properties": {
        "Organisation": " ",
        "Stufe": "Hauptgruppe",
        "Zeichen": "33",
        "Bezeichnung": "Eichwesen"
      },
      "PropertyInfos": null,
      "ID": "5cf165bf-897f-4ec9-bfec-4d82f0efc4e2",
      "ObjectType": "Hauptgruppe",
      "ParentID": "3df202ad-91b2-413a-9847-d12d536ed813",
      "ParentType": "Plan",
      "IsVirtual": true,
      "Frozen": false,
      "HasChild": true,
      "Hash": "-241204133",
      "@odata.readLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/5cf165bf-897f-4ec9-bfec-4d82f0efc4e2",
      "Child@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/5cf165bf-897f-4ec9-bfec-4d82f0efc4e2/Children",
      "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/5cf165bf-897f-4ec9-bfec-4d82f0efc4e2?$level=Full"
    },
    {
      "Properties": {
        "Organisation": " ",
        "Stufe": "Hauptgruppe",
        "Zeichen": "34",
        "Bezeichnung": "Materialprüfwesen"
      },
      "PropertyInfos": null,
      "ID": "e2707935-d7fb-4ba9-9641-a9c8a6acd5c7",
      "ObjectType": "Hauptgruppe",
      "ParentID": "3df202ad-91b2-413a-9847-d12d536ed813",
      "ParentType": "Plan",
      "IsVirtual": true,
      "Frozen": false,
      "HasChild": true,
      "Hash": "-1228699553",
      "@odata.readLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/e2707935-d7fb-4ba9-9641-a9c8a6acd5c7",
      "Child@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/e2707935-d7fb-4ba9-9641-a9c8a6acd5c7/Children",
      "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/e2707935-d7fb-4ba9-9641-a9c8a6acd5c7?$level=Full"
    },
    {
      "Properties": {
        "Organisation": " ",
        "Stufe": "Hauptgruppe",
        "Zeichen": "38",
        "Bezeichnung": "Frauen- und Familienangelegenheiten"
      },
      "PropertyInfos": null,
      "ID": "e5ba88d9-8900-41d3-a756-30d6723da673",
      "ObjectType": "Hauptgruppe",
      "ParentID": "3df202ad-91b2-413a-9847-d12d536ed813",
      "ParentType": "Plan",
      "IsVirtual": true,
      "Frozen": false,
      "HasChild": true,
      "Hash": "-1136315450",
      "@odata.readLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/e5ba88d9-8900-41d3-a756-30d6723da673",
      "Child@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/e5ba88d9-8900-41d3-a756-30d6723da673/Children",
      "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/e5ba88d9-8900-41d3-a756-30d6723da673?$level=Full"
    },
    {
      "Properties": {
        "Organisation": " ",
        "Stufe": "Hauptgruppe",
        "Zeichen": "39",
        "Bezeichnung": "Internationale Zusammenarbeit"
      },
      "PropertyInfos": null,
      "ID": "0ff62c4a-dbaa-45c0-942c-3d1a9d02a1c6",
      "ObjectType": "Hauptgruppe",
      "ParentID": "3df202ad-91b2-413a-9847-d12d536ed813",
      "ParentType": "Plan",
      "IsVirtual": true,
      "Frozen": false,
      "HasChild": true,
      "Hash": "708153319",
      "@odata.readLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/0ff62c4a-dbaa-45c0-942c-3d1a9d02a1c6",
      "Child@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/0ff62c4a-dbaa-45c0-942c-3d1a9d02a1c6/Children",
      "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/0ff62c4a-dbaa-45c0-942c-3d1a9d02a1c6?$level=Full"
    },
    {
      "Properties": {
        "Organisation": " ",
        "Stufe": "Hauptgruppe",
        "Zeichen": "40",
        "Bezeichnung": "Technische und medizinische Gewerbeaufsicht"
      },
      "PropertyInfos": null,
      "ID": "f727de53-62fc-43b6-a6d3-f8ee0f2f420c",
      "ObjectType": "Hauptgruppe",
      "ParentID": "3df202ad-91b2-413a-9847-d12d536ed813",
      "ParentType": "Plan",
      "IsVirtual": true,
      "Frozen": false,
      "HasChild": true,
      "Hash": "1632951223",
      "@odata.readLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/f727de53-62fc-43b6-a6d3-f8ee0f2f420c",
      "Child@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/f727de53-62fc-43b6-a6d3-f8ee0f2f420c/Children",
      "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/f727de53-62fc-43b6-a6d3-f8ee0f2f420c?$level=Full"
    },
    {
      "Properties": {
        "Organisation": " ",
        "Stufe": "Hauptgruppe",
        "Zeichen": "41",
        "Bezeichnung": "Gesundheitswesen"
      },
      "PropertyInfos": null,
      "ID": "1ea7beaf-6c96-4526-ab31-bbfe0394096e",
      "ObjectType": "Hauptgruppe",
      "ParentID": "3df202ad-91b2-413a-9847-d12d536ed813",
      "ParentType": "Plan",
      "IsVirtual": true,
      "Frozen": false,
      "HasChild": true,
      "Hash": "-1233054863",
      "@odata.readLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/1ea7beaf-6c96-4526-ab31-bbfe0394096e",
      "Child@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/1ea7beaf-6c96-4526-ab31-bbfe0394096e/Children",
      "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/1ea7beaf-6c96-4526-ab31-bbfe0394096e?$level=Full"
    },
    {
      "Properties": {
        "Organisation": " ",
        "Stufe": "Hauptgruppe",
        "Zeichen": "42",
        "Bezeichnung": "Veterinärangelegenheiten"
      },
      "PropertyInfos": null,
      "ID": "052a9a1e-5408-4b79-a8e6-feaa5d1632f4",
      "ObjectType": "Hauptgruppe",
      "ParentID": "3df202ad-91b2-413a-9847-d12d536ed813",
      "ParentType": "Plan",
      "IsVirtual": true,
      "Frozen": false,
      "HasChild": true,
      "Hash": "-1081181740",
      "@odata.readLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/052a9a1e-5408-4b79-a8e6-feaa5d1632f4",
      "Child@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/052a9a1e-5408-4b79-a8e6-feaa5d1632f4/Children",
      "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/052a9a1e-5408-4b79-a8e6-feaa5d1632f4?$level=Full"
    },
    {
      "Properties": {
        "Organisation": " ",
        "Stufe": "Hauptgruppe",
        "Zeichen": "43",
        "Bezeichnung": "Sozialangelegenheiten"
      },
      "PropertyInfos": null,
      "ID": "26a722d5-c0df-4662-bd08-1d499db1a717",
      "ObjectType": "Hauptgruppe",
      "ParentID": "3df202ad-91b2-413a-9847-d12d536ed813",
      "ParentType": "Plan",
      "IsVirtual": true,
      "Frozen": false,
      "HasChild": true,
      "Hash": "-1818704736",
      "@odata.readLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/26a722d5-c0df-4662-bd08-1d499db1a717",
      "Child@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/26a722d5-c0df-4662-bd08-1d499db1a717/Children",
      "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/26a722d5-c0df-4662-bd08-1d499db1a717?$level=Full"
    },
    {
      "Properties": {
        "Organisation": " ",
        "Stufe": "Hauptgruppe",
        "Zeichen": "44",
        "Bezeichnung": "Gesundheitsbezogener Verbraucherschutz,  Lebensmittel-und  Bedarfsgegenstände"
      },
      "PropertyInfos": null,
      "ID": "76c958c7-b442-46d5-a904-ac40efac612a",
      "ObjectType": "Hauptgruppe",
      "ParentID": "3df202ad-91b2-413a-9847-d12d536ed813",
      "ParentType": "Plan",
      "IsVirtual": true,
      "Frozen": false,
      "HasChild": true,
      "Hash": "1821378715",
      "@odata.readLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/76c958c7-b442-46d5-a904-ac40efac612a",
      "Child@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/76c958c7-b442-46d5-a904-ac40efac612a/Children",
      "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/76c958c7-b442-46d5-a904-ac40efac612a?$level=Full"
    },
    {
      "Properties": {
        "Organisation": " ",
        "Stufe": "Hauptgruppe",
        "Zeichen": "45",
        "Bezeichnung": "Arbeitsrechtsangelegenheiten"
      },
      "PropertyInfos": null,
      "ID": "c567c884-4f2e-4327-bcc3-353e12750c6d",
      "ObjectType": "Hauptgruppe",
      "ParentID": "3df202ad-91b2-413a-9847-d12d536ed813",
      "ParentType": "Plan",
      "IsVirtual": true,
      "Frozen": false,
      "HasChild": true,
      "Hash": "-1938546320",
      "@odata.readLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/c567c884-4f2e-4327-bcc3-353e12750c6d",
      "Child@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/c567c884-4f2e-4327-bcc3-353e12750c6d/Children",
      "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/c567c884-4f2e-4327-bcc3-353e12750c6d?$level=Full"
    },
    {
      "Properties": {
        "Organisation": " ",
        "Stufe": "Hauptgruppe",
        "Zeichen": "46",
        "Bezeichnung": "Europaangelegenheiten"
      },
      "PropertyInfos": null,
      "ID": "93712440-7f90-4f6a-a7dc-2dc5263abf5d",
      "ObjectType": "Hauptgruppe",
      "ParentID": "3df202ad-91b2-413a-9847-d12d536ed813",
      "ParentType": "Plan",
      "IsVirtual": true,
      "Frozen": false,
      "HasChild": true,
      "Hash": "1419725737",
      "@odata.readLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/93712440-7f90-4f6a-a7dc-2dc5263abf5d",
      "Child@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/93712440-7f90-4f6a-a7dc-2dc5263abf5d/Children",
      "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/93712440-7f90-4f6a-a7dc-2dc5263abf5d?$level=Full"
    },
    {
      "Properties": {
        "Organisation": " ",
        "Stufe": "Hauptgruppe",
        "Zeichen": "47",
        "Bezeichnung": "Betreuung der Vertriebenen, Flüchtlinge, Kriegssachgeschädigten, Aussiedler und Spätaussiedler"
      },
      "PropertyInfos": null,
      "ID": "7aa1bbe7-2f01-4369-8bee-64b49e4d5ede",
      "ObjectType": "Hauptgruppe",
      "ParentID": "3df202ad-91b2-413a-9847-d12d536ed813",
      "ParentType": "Plan",
      "IsVirtual": true,
      "Frozen": false,
      "HasChild": true,
      "Hash": "2091892370",
      "@odata.readLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/7aa1bbe7-2f01-4369-8bee-64b49e4d5ede",
      "Child@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/7aa1bbe7-2f01-4369-8bee-64b49e4d5ede/Children",
      "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/7aa1bbe7-2f01-4369-8bee-64b49e4d5ede?$level=Full"
    },
    {
      "Properties": {
        "Organisation": " ",
        "Stufe": "Hauptgruppe",
        "Zeichen": "48",
        "Bezeichnung": "Integration und Betreuung von Zuwanderinnen und Zuwanderern"
      },
      "PropertyInfos": null,
      "ID": "1838e333-b6a0-4f89-9185-b75a63d04658",
      "ObjectType": "Hauptgruppe",
      "ParentID": "3df202ad-91b2-413a-9847-d12d536ed813",
      "ParentType": "Plan",
      "IsVirtual": true,
      "Frozen": false,
      "HasChild": true,
      "Hash": "52689420",
      "@odata.readLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/1838e333-b6a0-4f89-9185-b75a63d04658",
      "Child@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/1838e333-b6a0-4f89-9185-b75a63d04658/Children",
      "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/1838e333-b6a0-4f89-9185-b75a63d04658?$level=Full"
    },
    {
      "Properties": {
        "Organisation": " ",
        "Stufe": "Hauptgruppe",
        "Zeichen": "49",
        "Bezeichnung": "Entwicklungspolitik, Zusammenarbeit mit Entwicklungsländern"
      },
      "PropertyInfos": null,
      "ID": "3e57612a-0727-44d3-b10f-9d5438b95705",
      "ObjectType": "Hauptgruppe",
      "ParentID": "3df202ad-91b2-413a-9847-d12d536ed813",
      "ParentType": "Plan",
      "IsVirtual": true,
      "Frozen": false,
      "HasChild": true,
      "Hash": "-2078207600",
      "@odata.readLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/3e57612a-0727-44d3-b10f-9d5438b95705",
      "Child@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/3e57612a-0727-44d3-b10f-9d5438b95705/Children",
      "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/3e57612a-0727-44d3-b10f-9d5438b95705?$level=Full"
    },
    {
      "Properties": {
        "Organisation": " ",
        "Stufe": "Hauptgruppe",
        "Zeichen": "50",
        "Bezeichnung": "Übergreifende kulturelle Angelegenheiten"
      },
      "PropertyInfos": null,
      "ID": "2bdea398-d537-4c28-a3b3-9ede043355ac",
      "ObjectType": "Hauptgruppe",
      "ParentID": "3df202ad-91b2-413a-9847-d12d536ed813",
      "ParentType": "Plan",
      "IsVirtual": true,
      "Frozen": false,
      "HasChild": true,
      "Hash": "1832198242",
      "@odata.readLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/2bdea398-d537-4c28-a3b3-9ede043355ac",
      "Child@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/2bdea398-d537-4c28-a3b3-9ede043355ac/Children",
      "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/2bdea398-d537-4c28-a3b3-9ede043355ac?$level=Full"
    },
    {
      "Properties": {
        "Organisation": " ",
        "Stufe": "Hauptgruppe",
        "Zeichen": "51",
        "Bezeichnung": "Jugendhilfe, Kinder- und Jugendschutz"
      },
      "PropertyInfos": null,
      "ID": "891f7945-7b62-4eec-8fe8-0d6af9750c56",
      "ObjectType": "Hauptgruppe",
      "ParentID": "3df202ad-91b2-413a-9847-d12d536ed813",
      "ParentType": "Plan",
      "IsVirtual": true,
      "Frozen": false,
      "HasChild": true,
      "Hash": "278984854",
      "@odata.readLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/891f7945-7b62-4eec-8fe8-0d6af9750c56",
      "Child@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/891f7945-7b62-4eec-8fe8-0d6af9750c56/Children",
      "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/891f7945-7b62-4eec-8fe8-0d6af9750c56?$level=Full"
    },
    {
      "Properties": {
        "Organisation": " ",
        "Stufe": "Hauptgruppe",
        "Zeichen": "52",
        "Bezeichnung": "Sport"
      },
      "PropertyInfos": null,
      "ID": "5ba662e4-b5fa-4a0d-9e3e-6e2f11ce3b28",
      "ObjectType": "Hauptgruppe",
      "ParentID": "3df202ad-91b2-413a-9847-d12d536ed813",
      "ParentType": "Plan",
      "IsVirtual": true,
      "Frozen": false,
      "HasChild": true,
      "Hash": "-2017007653",
      "@odata.readLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/5ba662e4-b5fa-4a0d-9e3e-6e2f11ce3b28",
      "Child@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/5ba662e4-b5fa-4a0d-9e3e-6e2f11ce3b28/Children",
      "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/5ba662e4-b5fa-4a0d-9e3e-6e2f11ce3b28?$level=Full"
    },
    {
      "Properties": {
        "Organisation": " ",
        "Stufe": "Hauptgruppe",
        "Zeichen": "53",
        "Bezeichnung": "Weiterbildung"
      },
      "PropertyInfos": null,
      "ID": "04a74bb6-c4bc-47aa-898c-0e0754ad10a8",
      "ObjectType": "Hauptgruppe",
      "ParentID": "3df202ad-91b2-413a-9847-d12d536ed813",
      "ParentType": "Plan",
      "IsVirtual": true,
      "Frozen": false,
      "HasChild": true,
      "Hash": "1462750006",
      "@odata.readLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/04a74bb6-c4bc-47aa-898c-0e0754ad10a8",
      "Child@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/04a74bb6-c4bc-47aa-898c-0e0754ad10a8/Children",
      "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/04a74bb6-c4bc-47aa-898c-0e0754ad10a8?$level=Full"
    },
    {
      "Properties": {
        "Organisation": " ",
        "Stufe": "Hauptgruppe",
        "Zeichen": "54",
        "Bezeichnung": "Angelegenheiten der Kirchen, Religions- und Weltanschauungsgemeinschaften"
      },
      "PropertyInfos": null,
      "ID": "b4817281-1292-4e36-bacd-d123a04902ba",
      "ObjectType": "Hauptgruppe",
      "ParentID": "3df202ad-91b2-413a-9847-d12d536ed813",
      "ParentType": "Plan",
      "IsVirtual": true,
      "Frozen": false,
      "HasChild": true,
      "Hash": "-2043774570",
      "@odata.readLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/b4817281-1292-4e36-bacd-d123a04902ba",
      "Child@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/b4817281-1292-4e36-bacd-d123a04902ba/Children",
      "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/b4817281-1292-4e36-bacd-d123a04902ba?$level=Full"
    },
    {
      "Properties": {
        "Organisation": " ",
        "Stufe": "Hauptgruppe",
        "Zeichen": "55",
        "Bezeichnung": "Bibliothekswesen, wissenschaftliche Information und Dokumentation"
      },
      "PropertyInfos": null,
      "ID": "9e335a16-0777-4e4e-968e-fe7328cab549",
      "ObjectType": "Hauptgruppe",
      "ParentID": "3df202ad-91b2-413a-9847-d12d536ed813",
      "ParentType": "Plan",
      "IsVirtual": true,
      "Frozen": false,
      "HasChild": true,
      "Hash": "-489314775",
      "@odata.readLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/9e335a16-0777-4e4e-968e-fe7328cab549",
      "Child@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/9e335a16-0777-4e4e-968e-fe7328cab549/Children",
      "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/9e335a16-0777-4e4e-968e-fe7328cab549?$level=Full"
    },
    {
      "Properties": {
        "Organisation": " ",
        "Stufe": "Hauptgruppe",
        "Zeichen": "56",
        "Bezeichnung": "Archivwesen"
      },
      "PropertyInfos": null,
      "ID": "b0c48956-e896-4821-afa1-3049fe14f193",
      "ObjectType": "Hauptgruppe",
      "ParentID": "3df202ad-91b2-413a-9847-d12d536ed813",
      "ParentType": "Plan",
      "IsVirtual": true,
      "Frozen": false,
      "HasChild": true,
      "Hash": "1066777522",
      "@odata.readLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/b0c48956-e896-4821-afa1-3049fe14f193",
      "Child@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/b0c48956-e896-4821-afa1-3049fe14f193/Children",
      "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/b0c48956-e896-4821-afa1-3049fe14f193?$level=Full"
    },
    {
      "Properties": {
        "Organisation": " ",
        "Stufe": "Hauptgruppe",
        "Zeichen": "57",
        "Bezeichnung": "Kunst, Kultur- und Denkmalpflege"
      },
      "PropertyInfos": null,
      "ID": "8fee6d2f-2fb2-4490-a381-13da7b5e9d96",
      "ObjectType": "Hauptgruppe",
      "ParentID": "3df202ad-91b2-413a-9847-d12d536ed813",
      "ParentType": "Plan",
      "IsVirtual": true,
      "Frozen": false,
      "HasChild": true,
      "Hash": "-131320443",
      "@odata.readLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/8fee6d2f-2fb2-4490-a381-13da7b5e9d96",
      "Child@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/8fee6d2f-2fb2-4490-a381-13da7b5e9d96/Children",
      "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/8fee6d2f-2fb2-4490-a381-13da7b5e9d96?$level=Full"
    },
    {
      "Properties": {
        "Organisation": " ",
        "Stufe": "Hauptgruppe",
        "Zeichen": "58",
        "Bezeichnung": "Medien"
      },
      "PropertyInfos": null,
      "ID": "d52edd1d-6b20-4c82-aad9-a8387e09269a",
      "ObjectType": "Hauptgruppe",
      "ParentID": "3df202ad-91b2-413a-9847-d12d536ed813",
      "ParentType": "Plan",
      "IsVirtual": true,
      "Frozen": false,
      "HasChild": true,
      "Hash": "-734840627",
      "@odata.readLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/d52edd1d-6b20-4c82-aad9-a8387e09269a",
      "Child@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/d52edd1d-6b20-4c82-aad9-a8387e09269a/Children",
      "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/d52edd1d-6b20-4c82-aad9-a8387e09269a?$level=Full"
    },
    {
      "Properties": {
        "Organisation": " ",
        "Stufe": "Hauptgruppe",
        "Zeichen": "60",
        "Bezeichnung": "Landwirtschaft"
      },
      "PropertyInfos": null,
      "ID": "1335e887-7b06-427d-8d7b-c11d1e095d50",
      "ObjectType": "Hauptgruppe",
      "ParentID": "3df202ad-91b2-413a-9847-d12d536ed813",
      "ParentType": "Plan",
      "IsVirtual": true,
      "Frozen": false,
      "HasChild": true,
      "Hash": "1511942408",
      "@odata.readLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/1335e887-7b06-427d-8d7b-c11d1e095d50",
      "Child@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/1335e887-7b06-427d-8d7b-c11d1e095d50/Children",
      "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/1335e887-7b06-427d-8d7b-c11d1e095d50?$level=Full"
    },
    {
      "Properties": {
        "Organisation": " ",
        "Stufe": "Hauptgruppe",
        "Zeichen": "61",
        "Bezeichnung": "Landwirtschaftliche Siedlung und Flurbereinigung"
      },
      "PropertyInfos": null,
      "ID": "523c9eb5-a0a9-4e3f-b691-d572ab188d00",
      "ObjectType": "Hauptgruppe",
      "ParentID": "3df202ad-91b2-413a-9847-d12d536ed813",
      "ParentType": "Plan",
      "IsVirtual": true,
      "Frozen": false,
      "HasChild": true,
      "Hash": "464859753",
      "@odata.readLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/523c9eb5-a0a9-4e3f-b691-d572ab188d00",
      "Child@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/523c9eb5-a0a9-4e3f-b691-d572ab188d00/Children",
      "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/523c9eb5-a0a9-4e3f-b691-d572ab188d00?$level=Full"
    },
    {
      "Properties": {
        "Organisation": " ",
        "Stufe": "Hauptgruppe",
        "Zeichen": "62",
        "Bezeichnung": "Wasserwirtschaft"
      },
      "PropertyInfos": null,
      "ID": "07a7e218-1561-4cbb-8fb4-1413aa47935c",
      "ObjectType": "Hauptgruppe",
      "ParentID": "3df202ad-91b2-413a-9847-d12d536ed813",
      "ParentType": "Plan",
      "IsVirtual": true,
      "Frozen": false,
      "HasChild": true,
      "Hash": "-1187561632",
      "@odata.readLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/07a7e218-1561-4cbb-8fb4-1413aa47935c",
      "Child@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/07a7e218-1561-4cbb-8fb4-1413aa47935c/Children",
      "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/07a7e218-1561-4cbb-8fb4-1413aa47935c?$level=Full"
    },
    {
      "Properties": {
        "Organisation": " ",
        "Stufe": "Hauptgruppe",
        "Zeichen": "63",
        "Bezeichnung": "Ernährungswirtschaft"
      },
      "PropertyInfos": null,
      "ID": "6afb366f-a35e-49e4-8299-6cef6c3cd883",
      "ObjectType": "Hauptgruppe",
      "ParentID": "3df202ad-91b2-413a-9847-d12d536ed813",
      "ParentType": "Plan",
      "IsVirtual": true,
      "Frozen": false,
      "HasChild": true,
      "Hash": "-414770655",
      "@odata.readLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/6afb366f-a35e-49e4-8299-6cef6c3cd883",
      "Child@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/6afb366f-a35e-49e4-8299-6cef6c3cd883/Children",
      "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/6afb366f-a35e-49e4-8299-6cef6c3cd883?$level=Full"
    },
    {
      "Properties": {
        "Organisation": " ",
        "Stufe": "Hauptgruppe",
        "Zeichen": "64",
        "Bezeichnung": "Forst"
      },
      "PropertyInfos": null,
      "ID": "f0942006-4d27-4afc-b898-243f1ae60857",
      "ObjectType": "Hauptgruppe",
      "ParentID": "3df202ad-91b2-413a-9847-d12d536ed813",
      "ParentType": "Plan",
      "IsVirtual": true,
      "Frozen": false,
      "HasChild": true,
      "Hash": "1408291603",
      "@odata.readLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/f0942006-4d27-4afc-b898-243f1ae60857",
      "Child@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/f0942006-4d27-4afc-b898-243f1ae60857/Children",
      "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/f0942006-4d27-4afc-b898-243f1ae60857?$level=Full"
    },
    {
      "Properties": {
        "Organisation": " ",
        "Stufe": "Hauptgruppe",
        "Zeichen": "65",
        "Bezeichnung": "Jagd und Fischerei"
      },
      "PropertyInfos": null,
      "ID": "14080d55-cef9-49ce-b95e-51c4adbcc048",
      "ObjectType": "Hauptgruppe",
      "ParentID": "3df202ad-91b2-413a-9847-d12d536ed813",
      "ParentType": "Plan",
      "IsVirtual": true,
      "Frozen": false,
      "HasChild": true,
      "Hash": "1837730312",
      "@odata.readLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/14080d55-cef9-49ce-b95e-51c4adbcc048",
      "Child@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/14080d55-cef9-49ce-b95e-51c4adbcc048/Children",
      "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/14080d55-cef9-49ce-b95e-51c4adbcc048?$level=Full"
    },
    {
      "Properties": {
        "Organisation": " ",
        "Stufe": "Hauptgruppe",
        "Zeichen": "67",
        "Bezeichnung": "Bergbau"
      },
      "PropertyInfos": null,
      "ID": "76d332da-ccda-4fb5-aabd-87c75dd6cac5",
      "ObjectType": "Hauptgruppe",
      "ParentID": "3df202ad-91b2-413a-9847-d12d536ed813",
      "ParentType": "Plan",
      "IsVirtual": true,
      "Frozen": false,
      "HasChild": true,
      "Hash": "-1822852972",
      "@odata.readLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/76d332da-ccda-4fb5-aabd-87c75dd6cac5",
      "Child@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/76d332da-ccda-4fb5-aabd-87c75dd6cac5/Children",
      "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/76d332da-ccda-4fb5-aabd-87c75dd6cac5?$level=Full"
    },
    {
      "Properties": {
        "Organisation": " ",
        "Stufe": "Hauptgruppe",
        "Zeichen": "68",
        "Bezeichnung": "Geowissenschaften"
      },
      "PropertyInfos": null,
      "ID": "1651dd9e-e578-421b-a6be-210da581c9c7",
      "ObjectType": "Hauptgruppe",
      "ParentID": "3df202ad-91b2-413a-9847-d12d536ed813",
      "ParentType": "Plan",
      "IsVirtual": true,
      "Frozen": false,
      "HasChild": true,
      "Hash": "1877863852",
      "@odata.readLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/1651dd9e-e578-421b-a6be-210da581c9c7",
      "Child@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/1651dd9e-e578-421b-a6be-210da581c9c7/Children",
      "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/1651dd9e-e578-421b-a6be-210da581c9c7?$level=Full"
    },
    {
      "Properties": {
        "Organisation": " ",
        "Stufe": "Hauptgruppe",
        "Zeichen": "70",
        "Bezeichnung": "Allgemeine Rechtsgrundlagen im Hochschulwesen und Allgemeine Wissenschaftsangelegenheiten, tertiärer Bereich (siehe auch HG 50), Berufsakademien"
      },
      "PropertyInfos": null,
      "ID": "d3951ed4-c7c8-400b-85b2-2f56f40d0c9c",
      "ObjectType": "Hauptgruppe",
      "ParentID": "3df202ad-91b2-413a-9847-d12d536ed813",
      "ParentType": "Plan",
      "IsVirtual": true,
      "Frozen": false,
      "HasChild": true,
      "Hash": "2125774019",
      "@odata.readLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/d3951ed4-c7c8-400b-85b2-2f56f40d0c9c",
      "Child@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/d3951ed4-c7c8-400b-85b2-2f56f40d0c9c/Children",
      "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/d3951ed4-c7c8-400b-85b2-2f56f40d0c9c?$level=Full"
    },
    {
      "Properties": {
        "Organisation": " ",
        "Stufe": "Hauptgruppe",
        "Zeichen": "71",
        "Bezeichnung": "Verwaltung der Hochschulen, Allgemeine Hochschulangelegenheiten"
      },
      "PropertyInfos": null,
      "ID": "53596770-fa78-40f9-84c7-9d6f6da2e66b",
      "ObjectType": "Hauptgruppe",
      "ParentID": "3df202ad-91b2-413a-9847-d12d536ed813",
      "ParentType": "Plan",
      "IsVirtual": true,
      "Frozen": false,
      "HasChild": true,
      "Hash": "-2081018231",
      "@odata.readLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/53596770-fa78-40f9-84c7-9d6f6da2e66b",
      "Child@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/53596770-fa78-40f9-84c7-9d6f6da2e66b/Children",
      "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/53596770-fa78-40f9-84c7-9d6f6da2e66b?$level=Full"
    },
    {
      "Properties": {
        "Organisation": " ",
        "Stufe": "Hauptgruppe",
        "Zeichen": "72",
        "Bezeichnung": "Studentenschaften, Studentenwerke, studentische Angelegenheiten"
      },
      "PropertyInfos": null,
      "ID": "c94d5eab-9d0b-4c22-bba4-0aec29ecab8a",
      "ObjectType": "Hauptgruppe",
      "ParentID": "3df202ad-91b2-413a-9847-d12d536ed813",
      "ParentType": "Plan",
      "IsVirtual": true,
      "Frozen": false,
      "HasChild": true,
      "Hash": "-298409604",
      "@odata.readLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/c94d5eab-9d0b-4c22-bba4-0aec29ecab8a",
      "Child@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/c94d5eab-9d0b-4c22-bba4-0aec29ecab8a/Children",
      "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/c94d5eab-9d0b-4c22-bba4-0aec29ecab8a?$level=Full"
    },
    {
      "Properties": {
        "Organisation": " ",
        "Stufe": "Hauptgruppe",
        "Zeichen": "73",
        "Bezeichnung": "Hochschulzugang, Immatrikulationsrecht, Hochschulzulassung, Hochschulkapazitäten"
      },
      "PropertyInfos": null,
      "ID": "fd96b2f9-b096-4d7f-aa50-6c3f48639a08",
      "ObjectType": "Hauptgruppe",
      "ParentID": "3df202ad-91b2-413a-9847-d12d536ed813",
      "ParentType": "Plan",
      "IsVirtual": true,
      "Frozen": false,
      "HasChild": true,
      "Hash": "1898757907",
      "@odata.readLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/fd96b2f9-b096-4d7f-aa50-6c3f48639a08",
      "Child@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/fd96b2f9-b096-4d7f-aa50-6c3f48639a08/Children",
      "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/fd96b2f9-b096-4d7f-aa50-6c3f48639a08?$level=Full"
    },
    {
      "Properties": {
        "Organisation": " ",
        "Stufe": "Hauptgruppe",
        "Zeichen": "74",
        "Bezeichnung": "Studium und Prüfungen an Hochschulen"
      },
      "PropertyInfos": null,
      "ID": "fe16ad6a-66b8-40b3-946c-5ffbc45bc3e9",
      "ObjectType": "Hauptgruppe",
      "ParentID": "3df202ad-91b2-413a-9847-d12d536ed813",
      "ParentType": "Plan",
      "IsVirtual": true,
      "Frozen": false,
      "HasChild": true,
      "Hash": "-840995659",
      "@odata.readLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/fe16ad6a-66b8-40b3-946c-5ffbc45bc3e9",
      "Child@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/fe16ad6a-66b8-40b3-946c-5ffbc45bc3e9/Children",
      "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/fe16ad6a-66b8-40b3-946c-5ffbc45bc3e9?$level=Full"
    },
    {
      "Properties": {
        "Organisation": " ",
        "Stufe": "Hauptgruppe",
        "Zeichen": "76",
        "Bezeichnung": "Forschung, Forschungsförderung, Technologietransfer"
      },
      "PropertyInfos": null,
      "ID": "da5b6548-a7ff-4cab-accd-50d22d8e3a99",
      "ObjectType": "Hauptgruppe",
      "ParentID": "3df202ad-91b2-413a-9847-d12d536ed813",
      "ParentType": "Plan",
      "IsVirtual": true,
      "Frozen": false,
      "HasChild": true,
      "Hash": "583504881",
      "@odata.readLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/da5b6548-a7ff-4cab-accd-50d22d8e3a99",
      "Child@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/da5b6548-a7ff-4cab-accd-50d22d8e3a99/Children",
      "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/da5b6548-a7ff-4cab-accd-50d22d8e3a99?$level=Full"
    },
    {
      "Properties": {
        "Organisation": " ",
        "Stufe": "Hauptgruppe",
        "Zeichen": "77",
        "Bezeichnung": "Hochschulplanung, Ökonomie des Hochschulwesens, Hochschulbau"
      },
      "PropertyInfos": null,
      "ID": "0f6b21bf-5639-4cbe-a386-a31102fabca0",
      "ObjectType": "Hauptgruppe",
      "ParentID": "3df202ad-91b2-413a-9847-d12d536ed813",
      "ParentType": "Plan",
      "IsVirtual": true,
      "Frozen": false,
      "HasChild": true,
      "Hash": "1221622299",
      "@odata.readLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/0f6b21bf-5639-4cbe-a386-a31102fabca0",
      "Child@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/0f6b21bf-5639-4cbe-a386-a31102fabca0/Children",
      "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/0f6b21bf-5639-4cbe-a386-a31102fabca0?$level=Full"
    },
    {
      "Properties": {
        "Organisation": " ",
        "Stufe": "Hauptgruppe",
        "Zeichen": "80",
        "Bezeichnung": "Grundlagen des Schulwesens und der Berufsbildung"
      },
      "PropertyInfos": null,
      "ID": "a258b230-e48f-4e3a-b359-5cfb2a078edb",
      "ObjectType": "Hauptgruppe",
      "ParentID": "3df202ad-91b2-413a-9847-d12d536ed813",
      "ParentType": "Plan",
      "IsVirtual": true,
      "Frozen": false,
      "HasChild": true,
      "Hash": "1498011906",
      "@odata.readLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/a258b230-e48f-4e3a-b359-5cfb2a078edb",
      "Child@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/a258b230-e48f-4e3a-b359-5cfb2a078edb/Children",
      "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/a258b230-e48f-4e3a-b359-5cfb2a078edb?$level=Full"
    },
    {
      "Properties": {
        "Organisation": " ",
        "Stufe": "Hauptgruppe",
        "Zeichen": "81",
        "Bezeichnung": "Schulverwaltung"
      },
      "PropertyInfos": null,
      "ID": "4cb055ce-cf9d-4a47-9e4a-3ae0012b2e74",
      "ObjectType": "Hauptgruppe",
      "ParentID": "3df202ad-91b2-413a-9847-d12d536ed813",
      "ParentType": "Plan",
      "IsVirtual": true,
      "Frozen": false,
      "HasChild": true,
      "Hash": "-1032630464",
      "@odata.readLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/4cb055ce-cf9d-4a47-9e4a-3ae0012b2e74",
      "Child@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/4cb055ce-cf9d-4a47-9e4a-3ae0012b2e74/Children",
      "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/4cb055ce-cf9d-4a47-9e4a-3ae0012b2e74?$level=Full"
    },
    {
      "Properties": {
        "Organisation": " ",
        "Stufe": "Hauptgruppe",
        "Zeichen": "82",
        "Bezeichnung": "Unterricht"
      },
      "PropertyInfos": null,
      "ID": "4114ed10-db79-4ffd-820a-ac82f0e7df5b",
      "ObjectType": "Hauptgruppe",
      "ParentID": "3df202ad-91b2-413a-9847-d12d536ed813",
      "ParentType": "Plan",
      "IsVirtual": true,
      "Frozen": false,
      "HasChild": true,
      "Hash": "1960053769",
      "@odata.readLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/4114ed10-db79-4ffd-820a-ac82f0e7df5b",
      "Child@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/4114ed10-db79-4ffd-820a-ac82f0e7df5b/Children",
      "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/4114ed10-db79-4ffd-820a-ac82f0e7df5b?$level=Full"
    },
    {
      "Properties": {
        "Organisation": " ",
        "Stufe": "Hauptgruppe",
        "Zeichen": "83",
        "Bezeichnung": "Schülerinnen und Schüler und Eltern"
      },
      "PropertyInfos": null,
      "ID": "1082187e-c3ec-4223-b118-0bb23534cfb9",
      "ObjectType": "Hauptgruppe",
      "ParentID": "3df202ad-91b2-413a-9847-d12d536ed813",
      "ParentType": "Plan",
      "IsVirtual": true,
      "Frozen": false,
      "HasChild": true,
      "Hash": "172929956",
      "@odata.readLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/1082187e-c3ec-4223-b118-0bb23534cfb9",
      "Child@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/1082187e-c3ec-4223-b118-0bb23534cfb9/Children",
      "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/1082187e-c3ec-4223-b118-0bb23534cfb9?$level=Full"
    },
    {
      "Properties": {
        "Organisation": " ",
        "Stufe": "Hauptgruppe",
        "Zeichen": "84",
        "Bezeichnung": "Lehrerinnen und Lehrer"
      },
      "PropertyInfos": null,
      "ID": "f9302251-9590-4cd9-a70e-fd72b1a96446",
      "ObjectType": "Hauptgruppe",
      "ParentID": "3df202ad-91b2-413a-9847-d12d536ed813",
      "ParentType": "Plan",
      "IsVirtual": true,
      "Frozen": false,
      "HasChild": true,
      "Hash": "-526742777",
      "@odata.readLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/f9302251-9590-4cd9-a70e-fd72b1a96446",
      "Child@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/f9302251-9590-4cd9-a70e-fd72b1a96446/Children",
      "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/f9302251-9590-4cd9-a70e-fd72b1a96446?$level=Full"
    },
    {
      "Properties": {
        "Organisation": " ",
        "Stufe": "Hauptgruppe",
        "Zeichen": "87",
        "Bezeichnung": "Außerschulische Berufsbildung"
      },
      "PropertyInfos": null,
      "ID": "4ea2aee2-9e8b-443f-8750-f3af3c74b388",
      "ObjectType": "Hauptgruppe",
      "ParentID": "3df202ad-91b2-413a-9847-d12d536ed813",
      "ParentType": "Plan",
      "IsVirtual": true,
      "Frozen": false,
      "HasChild": true,
      "Hash": "-552848228",
      "@odata.readLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/4ea2aee2-9e8b-443f-8750-f3af3c74b388",
      "Child@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/4ea2aee2-9e8b-443f-8750-f3af3c74b388/Children",
      "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Hauptgruppe/4ea2aee2-9e8b-443f-8750-f3af3c74b388?$level=Full"
    }
  ]
}

// Request-URL
// https://synacta.agile-is.de/_api/base/Hauptgruppe/0ba78e68-dd90-4681-96ef-c16015a5d4a1/Children
export const MockRootFirstChildResponse = {
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
}

// Request-URL
// https://synacta.agile-is.de/_api/base/Akte/0ddb0a89-8011-4ea6-8628-7bcb6910a81d/Documents
export const MockAkteHasenauerResponse = {
  "@odata.context": "http://synacta.agile-is.de/_api/base/Akte/0ddb0a89-8011-4ea6-8628-7bcb6910a81d/Documents",
  "@odata.count": 5,
  "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Akte/0ddb0a89-8011-4ea6-8628-7bcb6910a81d/Documents?$level=Full",
  "value": [
    {
      "Properties": {
        "Name": "Test Upload",
        "Dokumentdatum": "2017-01-03T00:00:00",
        "Schlagwörter": "",
        "Hinweise": "",
        "Mappe": "",
        "Ausgechecked von": "phasenauer@agile-is.de",
        "Weiserzeichen": "",
        "Ausgechecked am": "2017-01-03T10:09:23",
        "Geheimschutzstufe": "",
        "Organisation": "Hasenauer",
        "Akte/Vorgang": "01",
        "Dokumentnr.": "2017/00001",
        "Altsystem Daten": "",
        "Erstellt am": "2017-01-03T10:08:31",
        "Erstellt von": "phasenauer@agile-is.de",
        "Geändert am": "2017-01-03T10:08:31",
        "Geändert von": "phasenauer@agile-is.de",
        "Titel": "Test Upload.docx",
        "Erweiterung": "docx"
      },
      "PropertyInfos": null,
      "ID": "3a0683bf-3507-4f9e-97e3-0d350eda3d12",
      "ObjectType": "Dokument",
      "ParentID": "0ddb0a89-8011-4ea6-8628-7bcb6910a81d",
      "ParentType": "Akte",
      "Frozen": false,
      "CheckedOutBy": "phasenauer@agile-is.de",
      "Version": "1",
      "Hash": "-1466342464",
      "@odata.readLink": "http://synacta.agile-is.de/_api/base/Dokument/3a0683bf-3507-4f9e-97e3-0d350eda3d12",
      "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Dokument/3a0683bf-3507-4f9e-97e3-0d350eda3d12?$level=Full"
    },
    {
      "Properties": {
        "Name": "Test Upload - Copy",
        "Dokumentdatum": "2017-01-03T00:00:00",
        "Schlagwörter": "",
        "Hinweise": "",
        "Mappe": "",
        "Ausgechecked von": "phasenauer@agile-is.de",
        "Weiserzeichen": "",
        "Ausgechecked am": "2017-01-03T10:28:47",
        "Geheimschutzstufe": "",
        "Organisation": "Hasenauer",
        "Akte/Vorgang": "01",
        "Dokumentnr.": "2017/00002",
        "Altsystem Daten": "",
        "Erstellt am": "2017-01-03T10:28:08",
        "Erstellt von": "phasenauer@agile-is.de",
        "Geändert am": "2017-01-03T10:28:08",
        "Geändert von": "phasenauer@agile-is.de",
        "Titel": "Test Upload - Copy.docx",
        "Erweiterung": "docx"
      },
      "PropertyInfos": null,
      "ID": "364ea060-3ab6-4bc9-848d-f833a54305cb",
      "ObjectType": "Dokument",
      "ParentID": "0ddb0a89-8011-4ea6-8628-7bcb6910a81d",
      "ParentType": "Akte",
      "Frozen": false,
      "CheckedOutBy": "phasenauer@agile-is.de",
      "Version": "1",
      "Hash": "-795566044",
      "@odata.readLink": "http://synacta.agile-is.de/_api/base/Dokument/364ea060-3ab6-4bc9-848d-f833a54305cb",
      "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Dokument/364ea060-3ab6-4bc9-848d-f833a54305cb?$level=Full"
    },
    {
      "Properties": {
        "Name": "Test Upload - Copy 123",
        "Dokumentdatum": "0006-09-07T00:00:00",
        "Schlagwörter": "",
        "Hinweise": "",
        "Mappe": "",
        "Ausgechecked von": "",
        "Weiserzeichen": "",
        "Ausgechecked am": "",
        "Geheimschutzstufe": "keine",
        "Organisation": "Hasenauer",
        "Akte/Vorgang": "01",
        "Dokumentnr.": "2017/00015",
        "Altsystem Daten": "",
        "Erstellt am": "2017-01-03T16:42:46",
        "Erstellt von": "phasenauer@agile-is.de",
        "Geändert am": "2017-01-03T16:42:46",
        "Geändert von": "phasenauer@agile-is.de",
        "Titel": "",
        "Erweiterung": "docx"
      },
      "PropertyInfos": null,
      "ID": "247bbd8f-0d3d-4801-8d09-6c8e098a9edc",
      "ObjectType": "Dokument",
      "ParentID": "0ddb0a89-8011-4ea6-8628-7bcb6910a81d",
      "ParentType": "Akte",
      "Frozen": false,
      "CheckedOutBy": "",
      "Version": "1",
      "Hash": "-946043745",
      "@odata.readLink": "http://synacta.agile-is.de/_api/base/Dokument/247bbd8f-0d3d-4801-8d09-6c8e098a9edc",
      "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Dokument/247bbd8f-0d3d-4801-8d09-6c8e098a9edc?$level=Full"
    },
    {
      "Properties": {
        "Name": "Test Upload - Copy 12345",
        "Dokumentdatum": "0006-09-07T00:00:00",
        "Schlagwörter": "",
        "Hinweise": "",
        "Mappe": "",
        "Ausgechecked von": "",
        "Weiserzeichen": "",
        "Ausgechecked am": "",
        "Geheimschutzstufe": "keine",
        "Organisation": "Hasenauer",
        "Akte/Vorgang": "01",
        "Dokumentnr.": "2017/00016",
        "Altsystem Daten": "",
        "Erstellt am": "2017-01-04T07:38:02",
        "Erstellt von": "phasenauer@agile-is.de",
        "Geändert am": "2017-01-04T07:38:02",
        "Geändert von": "phasenauer@agile-is.de",
        "Titel": "",
        "Erweiterung": "docx"
      },
      "PropertyInfos": null,
      "ID": "30d43500-9c27-4b93-8b0a-0587dffaf06b",
      "ObjectType": "Dokument",
      "ParentID": "0ddb0a89-8011-4ea6-8628-7bcb6910a81d",
      "ParentType": "Akte",
      "Frozen": false,
      "CheckedOutBy": "",
      "Version": "1",
      "Hash": "1852100416",
      "@odata.readLink": "http://synacta.agile-is.de/_api/base/Dokument/30d43500-9c27-4b93-8b0a-0587dffaf06b",
      "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Dokument/30d43500-9c27-4b93-8b0a-0587dffaf06b?$level=Full"
    },
    {
      "Properties": {
        "Name": "Test Upload 222",
        "Dokumentdatum": "0006-09-07T00:00:00",
        "Schlagwörter": "",
        "Hinweise": "",
        "Mappe": "",
        "Ausgechecked von": "",
        "Weiserzeichen": "",
        "Ausgechecked am": "",
        "Geheimschutzstufe": "keine",
        "Organisation": "Hasenauer",
        "Akte/Vorgang": "01",
        "Dokumentnr.": "2017/00014",
        "Altsystem Daten": "",
        "Erstellt am": "2017-01-03T16:42:28",
        "Erstellt von": "phasenauer@agile-is.de",
        "Geändert am": "2017-01-03T16:42:28",
        "Geändert von": "phasenauer@agile-is.de",
        "Titel": "",
        "Erweiterung": "docx"
      },
      "PropertyInfos": null,
      "ID": "bf7250b2-3189-48fc-80e9-370919995f92",
      "ObjectType": "Dokument",
      "ParentID": "0ddb0a89-8011-4ea6-8628-7bcb6910a81d",
      "ParentType": "Akte",
      "Frozen": false,
      "CheckedOutBy": "",
      "Version": "1",
      "Hash": "-766051513",
      "@odata.readLink": "http://synacta.agile-is.de/_api/base/Dokument/bf7250b2-3189-48fc-80e9-370919995f92",
      "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Dokument/bf7250b2-3189-48fc-80e9-370919995f92?$level=Full"
    }
  ]
}

// Request-URL
// https://synacta.agile-is.de/_api/base/Dokument/3a0683bf-3507-4f9e-97e3-0d350eda3d12/Versions
export const MockHasenauerVersionsResponse = {
  "@odata.context": "http://synacta.agile-is.de/_api/base/Dokument/3a0683bf-3507-4f9e-97e3-0d350eda3d12/Versions",
  "@odata.count": 1,
  "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Dokument/3a0683bf-3507-4f9e-97e3-0d350eda3d12/Versions?$level=Full",
  "value": [
    {
      "Version": "1",
      "CreatedBy": "phasenauer@agile-is.de",
      "CreatedAt": "2017-01-03T10:08:32",
      "FileSize": 11418,
      "ParentId": "3a0683bf-3507-4f9e-97e3-0d350eda3d12",
      "ParentType": "Dokument",
      "@odata.readLink": "http://synacta.agile-is.de/_api/base/Dokument/3a0683bf-3507-4f9e-97e3-0d350eda3d12/Versions/1",
      "File@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Dokument/3a0683bf-3507-4f9e-97e3-0d350eda3d12/Versions/1/GetFile",
      "Restore@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Dokument/3a0683bf-3507-4f9e-97e3-0d350eda3d12/Versions/1/Restore",
      "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Dokument/3a0683bf-3507-4f9e-97e3-0d350eda3d12/Versions/1?$level=Full"
    }
  ]
}

// Request-URL
// https://synacta.agile-is.de/_api/base/Obergruppe/3f620a3b-60ab-488c-a4bb-58a1ca152abc/Children
export const MockRootSecondChildResponse = {
  "@odata.context": "http://synacta.agile-is.de/_api/base/Obergruppe/3f620a3b-60ab-488c-a4bb-58a1ca152abc/Children",
  "@odata.count": 3,
  "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Obergruppe/3f620a3b-60ab-488c-a4bb-58a1ca152abc/Children?$level=Full",
  "value": [
    {
      "Properties": {
        "Organisation": " ",
        "Stufe": "Gruppe",
        "Zeichen": "0190",
        "Bezeichnung": "Dienststellen und Einrichtungen des Landes im Geschäftsbereich des Frauenministeriums (aufgelöst zum 30.06.1998)"
      },
      "PropertyInfos": null,
      "ID": "b20c5057-6e28-4260-8871-f4eba05ecbac",
      "ObjectType": "Gruppe",
      "ParentID": "3f620a3b-60ab-488c-a4bb-58a1ca152abc",
      "ParentType": "Obergruppe",
      "IsVirtual": true,
      "Frozen": false,
      "HasChild": false,
      "Hash": "1163145707",
      "@odata.readLink": "http://synacta.agile-is.de/_api/base/Gruppe/b20c5057-6e28-4260-8871-f4eba05ecbac",
      "Child@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Gruppe/b20c5057-6e28-4260-8871-f4eba05ecbac/Children",
      "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Gruppe/b20c5057-6e28-4260-8871-f4eba05ecbac?$level=Full"
    },
    {
      "Properties": {
        "Organisation": " ",
        "Stufe": "Gruppe",
        "Zeichen": "0191",
        "Bezeichnung": "Dienststellen und Einrichtungen des Landes (Geschäftsbereich Innenministerium) - Fortsetzung von 0151 -"
      },
      "PropertyInfos": null,
      "ID": "71dbff6b-4a3c-4f2a-bd35-22dbf22dcaaf",
      "ObjectType": "Gruppe",
      "ParentID": "3f620a3b-60ab-488c-a4bb-58a1ca152abc",
      "ParentType": "Obergruppe",
      "IsVirtual": true,
      "Frozen": false,
      "HasChild": true,
      "Hash": "-222655326",
      "@odata.readLink": "http://synacta.agile-is.de/_api/base/Gruppe/71dbff6b-4a3c-4f2a-bd35-22dbf22dcaaf",
      "Child@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Gruppe/71dbff6b-4a3c-4f2a-bd35-22dbf22dcaaf/Children",
      "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Gruppe/71dbff6b-4a3c-4f2a-bd35-22dbf22dcaaf?$level=Full"
    },
    {
      "Properties": {
        "Organisation": " ",
        "Stufe": "Gruppe",
        "Zeichen": "0195",
        "Bezeichnung": "Dienststellen und Einrichtungen des Landes im Geschäftsbereich des Umweltministeriums"
      },
      "PropertyInfos": null,
      "ID": "a7316ece-2f69-4f95-82d4-62b87140dcbb",
      "ObjectType": "Gruppe",
      "ParentID": "3f620a3b-60ab-488c-a4bb-58a1ca152abc",
      "ParentType": "Obergruppe",
      "IsVirtual": true,
      "Frozen": false,
      "HasChild": false,
      "Hash": "1837142662",
      "@odata.readLink": "http://synacta.agile-is.de/_api/base/Gruppe/a7316ece-2f69-4f95-82d4-62b87140dcbb",
      "Child@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Gruppe/a7316ece-2f69-4f95-82d4-62b87140dcbb/Children",
      "FullODataLink@odata.navigationLink": "http://synacta.agile-is.de/_api/base/Gruppe/a7316ece-2f69-4f95-82d4-62b87140dcbb?$level=Full"
    }
  ]
}

