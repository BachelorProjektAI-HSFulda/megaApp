import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
// TODO shorten with systemjs
import 'rxjs/add/operator/map';

import { Observable } from 'rxjs/Observable';

import { deserialize } from 'json-typescript-mapper';

import { IFrame, Frame, Entity, Container, Document } from './api.objects';

const API_KEY = 'Token FHProjekt2016';
const BASE_URL = 'https://synacta.agile-is.de/_api/base/';

@Injectable()
export class SynactaAPIService {

    baseHeaders: Headers = new Headers();

    constructor(private http: Http) {
        this.baseHeaders.append("Authorization", API_KEY);
    }

    /* Send request to the Synacta-Endpoint
     *
     * which contains a json object
     * This method is async which means that your code
     * will continue after calling this method
     *
     * To actually receive data one has to subscribe
     * to this function with a callback to hold the
     * json result.
     *
     * @returns an observable response object containing a json object
     */
    private get(target: string, type: string, id: string) {
         let headers = new Headers(this.baseHeaders);
         let endpoint = BASE_URL;
         endpoint = (type)? endpoint + type : endpoint;
         endpoint = (id)? endpoint + "/" +id : endpoint;
         endpoint = (target) ? endpoint + target : endpoint;
         return this.http
             .get(endpoint, {headers: headers})
             .map(response => response.json());
     }

    /*
     * Gets the root of Synacta. It needs no parameters.
     * To use just subscribe to the response of type container
     *  Example:
     *  subscribe(resp => variable:Container = resp);
     * @return the observable root container
     */
    public getRoot(): Observable<Container> {
        // Get the root container which is on the first position
        // of the value array of the root frame (per definition)
        // 1. map the async json response to the IFrame interface
        // 2. use the interface to retrieve the root container
        // 3. deserialize the raw json to a container object
        // 4. return the container object within a observable
        return this
            .get("root", null, null)
            .map((json:IFrame) => deserialize(Container, json.value[0]));
     }


    /*
     * This function uses a type and id to receive a specific object (container)
     * @param type
     * @param id
     * @return an observable containing a container object
     */
     public getByID(type: string, id: string): Observable<Container> {
         return this
             .get(null, type, id)
             .map((json) => deserialize(Container, json));
     }

    /*
     * This function uses a type string to receive all objects of this specific type
     * This function receives an IFrame
     * @param type
     * @return an observable containing a list of entities (or even container?)
     */
     public getByType(type: string): Observable<Container[]> {
         return this
             .get(null, type, null)
             .map((json: IFrame) => {
                let result = new Array<Container>();
                for (let value of json.value) {
                    result.push(deserialize(Container, value));
                }
                return result;
             });
     }

    /*
     * This function uses type and id to receive the children of a specific object (container)
     * This function receives an IFrame
     * @param type
     * @param id
     * @return an observable containing a list of Entity
     */
     public getChildren(type: string, id: string): Observable<Entity[]> {
         return this
             .get("Children", type, id)
             .map((json: IFrame) => {
                 let result = new Array<Entity>();
                 for (let value of json.value) {
                     // TODO - Convert all received objects into a document or a container
                     // depending on inner data
                     // if (value[something] == something ) {
                     //     result.push(deserialize(Container, value));
                     // } else {
                     //     result.push(deserialize(Document, value));
                     // }
                     result.push(deserialize(Entity, value));
                 }
                 return result;
             });
     }

    /*
     * This function uses type and id to receive a string list of the types of
     * all present childs
     * This function receives an IFrame
     * @param type
     * @param id
     * @return an observable which contains a string list
     */
     public getChildTypes(type: string, id: string): Observable<String[]> {
         return this
             .get("Children/Types", type, id)
             .map((json: IFrame) => {
                 let result = new Array<String>();
                 for (let value of json.value) {
                     result.push(new String(value));
                 }
                 return result;
             });
     }

    /*
     * This function uses type and id to receive all documents of a specific
     * container
     * This function receives an IFrame
     * @param type
     * @param id
     * @return an observable containing a list of Document
     */
     public getDocuments(type: string, id: string): Observable<Document[]> {
         return this
             .get("Documents", type, id)
             .map((json: IFrame) => {
                 let result: Array<Document>;
                 for (let value of json.value) {
                     result.push(deserialize(Document, value));
                 }
                 return result;
             });
     }

    /*
     * This function uses type and id to receive a string list of all the types
     * of the present documents of the container
     * @param type
     * @param id
     * @return an observable which contains a string list
     */
     public getDocTypes(type: string, id: string): Observable<String[]> {
         return this
             .get("Documents/Types", type, id)
             .map((json: IFrame) => {
                 let result = new Array<String>();
                 for (let value of json.value) {
                     result.push(new String(value));
                 }
                 return result;
             });
     }
}
