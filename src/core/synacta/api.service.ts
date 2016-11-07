import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
// TODO shorten with systemjs
import 'rxjs/add/operator/map'

const API_KEY = 'Token FHProjekt2016';
const BASE_URL = 'https://synacta.agile-is.de/_api/base';

@Injectable()
export class SynactaAPIService {

    baseHeaders: Headers = new Headers();

    constructor(private http: Http) { 
        this.baseHeaders.append("Authorization", API_KEY);
    }

    /* Send request to the Synacta-Endpoint
     *
     * returns an observable Json object
     */
    public get(target: string, type: string, id:string) {
        let endpoint = (target)? BASE_URL + target : BASE_URL;
        let headers = new Headers(this.baseHeaders);
        if (type) {
            headers.append("type", type);
        }
        if (id) {
            headers.append("id", id);
        }
        return this.http
            .get(endpoint, {headers: headers})
            .map(response => response.json());
    }
}