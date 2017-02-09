import { Injectable } from '@angular/core';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { Response, ResponseOptions } from '@angular/http';
import { 
    MockRootFrame, 
    MockRootChildResponse, 
    MockRootFirstChildResponse,
    MockAkteHasenauerResponse,
    MockAkteHasenauerDocumentsResponse,
    MockHasenauerVersionsResponse,
    MockRootSecondChildResponse,
    MockOrg1011Response
} from '../synacta/api.mocks';

@Injectable()
export class MockBackendService {
    constructor(private backend: MockBackend) {

    }

    start(): void {
        this.backend.connections.subscribe((c: MockConnection) => {
            const URL = 'https://synacta.agile-is.de/_api/base/root';
            console.log(c.request.url);
            if (c.request.url == URL && c.request.method === 0) {
                c.mockRespond(new Response(new ResponseOptions({
                    body: MockRootFrame
                })));
            }
        });
        this.backend.connections.subscribe((c: MockConnection) => {
            const URL = 'https://synacta.agile-is.de/_api/base/Plan/3df202ad-91b2-413a-9847-d12d536ed813/Children?$top=20&$skip=0';
            if (c.request.url == URL && c.request.method === 0) {
                c.mockRespond(new Response(new ResponseOptions({
                    body: MockRootChildResponse
                })));
            }
        });
        this.backend.connections.subscribe((c: MockConnection) => {
            const URL = 'https://synacta.agile-is.de/_api/base/Hauptgruppe/0ba78e68-dd90-4681-96ef-c16015a5d4a1/Children?$top=20&$skip=0';
            if (c.request.url == URL && c.request.method === 0) {
                c.mockRespond(new Response(new ResponseOptions({
                    body: MockRootFirstChildResponse
                })));
            }
        });
        this.backend.connections.subscribe((c: MockConnection) => {
            const URL = 'https://synacta.agile-is.de/_api/base/Akte/0ddb0a89-8011-4ea6-8628-7bcb6910a81d';
            if (c.request.url == URL && c.request.method === 0) {
                c.mockRespond(new Response(new ResponseOptions({
                    body: MockAkteHasenauerResponse
                })));
            }
        });
        this.backend.connections.subscribe((c: MockConnection) => {
            const URL = 'https://synacta.agile-is.de/_api/base/Akte/0ddb0a89-8011-4ea6-8628-7bcb6910a81d/Documents';
            if (c.request.url == URL && c.request.method === 0) {
                c.mockRespond(new Response(new ResponseOptions({
                    body: MockAkteHasenauerDocumentsResponse
                })));
            }
        });
        this.backend.connections.subscribe((c: MockConnection) => {
            const URL = 'https://synacta.agile-is.de/_api/base/Dokument/3a0683bf-3507-4f9e-97e3-0d350eda3d12/Versions';
            if (c.request.url == URL && c.request.method === 0) {
                c.mockRespond(new Response(new ResponseOptions({
                    body: MockHasenauerVersionsResponse
                })));
            }
        });
        this.backend.connections.subscribe((c: MockConnection) => {
            const URL = /https:\/\/synacta.agile-is.de\/_api\/base\/Obergruppe\/3f620a3b-60ab-488c-a4bb-58a1ca152abc\/Children\?\$top=20&\$skip=0/;
            if (c.request.url.match(URL) && c.request.method === 0) {
                c.mockRespond(new Response(new ResponseOptions({
                    body: MockRootSecondChildResponse
                })));
            }
        });
        this.backend.connections.subscribe((c: MockConnection) => {
            const URL = 'https://synacta.agile-is.de/_api/org/1011/Akte';
            if (c.request.url == URL && c.request.method === 0) {
                c.mockRespond(new Response(new ResponseOptions({
                    body: MockOrg1011Response
                })));
            }
        });
    }
}

