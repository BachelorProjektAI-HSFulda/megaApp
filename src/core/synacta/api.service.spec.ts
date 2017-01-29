import { TestBed, inject, async } from '@angular/core/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { HttpModule, Http, XHRBackend, BaseRequestOptions, Response, ResponseOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { deserialize } from 'json-typescript-mapper';
import { SynactaAPIService } from './api.service';
import { IFrame, Frame, Entity, Container, Document } from './api.objects';
import { MockRootFrame, MockRootValue, MockContainer, MockArrayOf10Entities, MockArrayOf5Entities, Mock4BeginningAt5 } from './api.mocks';

describe("Synacta API Service", () => {

    let mockBackend: MockBackend;
    let service: SynactaAPIService;
    let getRoot = {
        response: JSON.stringify(MockRootFrame),
        getLink: MockRootFrame['@odata.context'],
        count: MockRootFrame['@odata.count']
    }
    let getByID = {
        response: JSON.stringify(MockContainer),
        getLink: MockContainer['@odata.readLink'],
        count: MockContainer['@odata.count'],
        type: MockContainer.ObjectType,
        ID: MockContainer.ID
    }
    let getChildren = {
        response10: JSON.stringify(MockArrayOf10Entities),
        response5: JSON.stringify(MockArrayOf5Entities),
        response4: JSON.stringify(Mock4BeginningAt5),
        getLink: MockArrayOf10Entities['@odata.context'],
        parentID: "0ba78e68-dd90-4681-96ef-c16015a5d4a1",
        parentType: "Hauptgruppe",
    }


    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ 
                Http,
                MockBackend,
                BaseRequestOptions,
                {
                    provide: Http,
                    deps: [ MockBackend, BaseRequestOptions ],
                    useFactory: (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
                        return new Http(backend, defaultOptions);
                    }
                },
                SynactaAPIService
            ],
            imports: [ 
                HttpModule
            ]
        });
        mockBackend = TestBed.get(MockBackend);
    });

    beforeEach(inject([SynactaAPIService], s => {
        service = s;
    }));

    it("get's constructed.", () => {
        expect(service).toBeDefined();
    });

    it("get's the root object and converts it properly.", async( () => {
        mockBackend.connections.subscribe(
            (connection: MockConnection) => {
                expect(connection.request.url).toEqual('https://synacta.agile-is.de/_api/base/root');
                connection.mockRespond(new Response(
                    new ResponseOptions({
                        body: getRoot.response
                    })
                ));
            }
        );

        service.getRoot().subscribe( (response: Container) => {
            expect(response).toBeDefined();
            expect(response instanceof Container).toBeTruthy();
            expect(response.ID).toEqual(MockRootValue.ID);
        });
    }));
 
    it("returns correct data in api fields", async(() => {
        mockBackend.connections.subscribe(
            (connection: MockConnection) => {
                expect(connection.request.url).toEqual('https://synacta.agile-is.de/_api/base/root');
                connection.mockRespond(new Response(
                    new ResponseOptions({
                        body: getRoot.response
                    })
                ));
            }
        );
        
        service.getRoot().subscribe( (response:Container) => { 
            expect(response).toBeDefined();
            expect(response.ReadLink).toEqual(MockRootValue["@odata.readLink"]);
        });
    }));

    it("responds with object that contains valid properties", async(() => {
        mockBackend.connections.subscribe(
            (connection: MockConnection) => {
                expect(connection.request.url).toEqual('https://synacta.agile-is.de/_api/base/root');
                connection.mockRespond(new Response(
                    new ResponseOptions({
                        body: getRoot.response
                    })
                ));
            }
        );
        
        service.getRoot().subscribe( (response:Container) => {
            expect(response.Properties["Stufe"]).toEqual("Plan");
        });
    }));

    it("get's correct object by ID", async( () => {
        mockBackend.connections.subscribe(
            (connection: MockConnection) => {
                let url = 'https://synacta.agile-is.de/_api/base/' 
                    + MockContainer.ObjectType 
                    + '/' + MockContainer.ID;
                expect(connection.request.url).toEqual(url);
                connection.mockRespond(new Response(
                    new ResponseOptions({
                        body: getByID.response
                    })
                ));
            }
        );

        service.getByID(MockContainer.ObjectType, MockContainer.ID).subscribe( (response:Container) => {
            expect(response.Properties["Typ"]).toEqual(MockContainer.ObjectType);
        });
    }));

    it("receives child elements of an container", async(() => {
        let parent: Container = new Container();
        parent.ID = getChildren.parentID;
        parent.ObjectType = getChildren.parentType;
        
        mockBackend.connections.subscribe(
            (connection: MockConnection) => {
                let url = 'https://synacta.agile-is.de/_api/base/' 
                    + parent.ObjectType 
                    + '/' + parent.ID
                    + '/Children?$top=20&$skip=0';
                expect(connection.request.url).toEqual(url);
                connection.mockRespond(new Response(
                    new ResponseOptions({
                        body: getChildren.response10
                    })
                ));
            }
        );

        service.getChildren(parent).subscribe(response => {
            expect(response[0] instanceof Entity).toEqual(true);
            expect(response.length).toEqual(10);
        });
    }));

    it("receives 5 child elements of an container", async(() => {
        let parent: Container = new Container();
        parent.ID = getChildren.parentID;
        parent.ObjectType = getChildren.parentType;

        mockBackend.connections.subscribe(
            (connection: MockConnection) => {
                let url = 'https://synacta.agile-is.de/_api/base/' 
                    + parent.ObjectType 
                    + '/' + parent.ID
                    + '/Children?$top=5&$skip=0';
                expect(connection.request.url).toEqual(url);
                connection.mockRespond(new Response(
                    new ResponseOptions({
                        body: getChildren.response5
                    })
                ));
            }
        );

        service.getChildren(parent, 5).subscribe(response => {
            expect(response[0] instanceof Entity).toEqual(true);
            expect(response.length).toEqual(5);
        });
    }));

    it("receives 4 child elements of an container starting by element 5", async( () => {
        let parent: Container = new Container();
        parent.ID = getChildren.parentID;
        parent.ObjectType = getChildren.parentType;

        mockBackend.connections.subscribe(
            (connection: MockConnection) => {
                let url = 'https://synacta.agile-is.de/_api/base/' 
                    + parent.ObjectType 
                    + '/' + parent.ID
                    + '/Children?$top=4&$skip=5';
                expect(connection.request.url).toEqual(url);
                connection.mockRespond(new Response(
                    new ResponseOptions({
                        body: getChildren.response4
                    })
                ));
            }
        );

        service.getChildren(parent, 4, 5).subscribe(response => {
            expect(response[0] instanceof Entity).toEqual(true);
            expect(response.length).toEqual(4);
            expect(response[0].ID).toEqual(Mock4BeginningAt5["value"][0]["ID"]);
        });
    }));
    
});