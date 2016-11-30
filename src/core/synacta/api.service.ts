import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
// TODO shorten with systemjs
import 'rxjs/add/operator/map';

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
     * @returns an observable response object
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
     * @return the root container
     */
     public getRoot() {
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
    function that gets an element out of Synacta by using the ID. 
    @param type
    @param id  
    @return an observable Entity object from function createObject
    */
     public getByID(type: string, id: string) {
         let result = createObject(this.get(null, type, id));
         return result;
     }

    /*
    function that gets an element out of Synacta by using the type. 
    @param type
    
    @return an observable Entity object from function createObject
    */
     public getByType(type: string) {
         let result = createObject(this.get(null, type, null));
         return result;
     }

    /*
    function that gets all the Children ob an Element using the type and the id. 
    @param type
    @param id  
    @return an observable Entity object from function createObject
    */
     public getChildren(type: string, id:string){
         let result = createObject(this.get("Children", type, id));
         return result;
     }

    /*
    function that gets the types of all Children by using the type and the id of the container.
    @param type
    @param id  
    @return an observable Entity object from function createObject
    */
     public getChildTypes(type:string, id: string){
         let result = createObject(this.get("Children/Types", type, id));
         return result;
     }

    /*
    function that gets all document in Container using the type and the id of the container. 
    @param type
    @param id  
    @return an observable Entity object from function createObject
    */
     public getDocuments(type:string, id: string){
         let result = createObject(this.get("Documents", type, id));
         return result;
     }

    /*
    function that gets the types of the documents in the container using 
    the type and the id of the container.
    @param type
    @param id  
    @return an observable Entity object from function createObject
    */
     public getDocTypes(type:string, id: string){
         let result = createObject(this.get("Document/Types", type, id));
         return result;
     }
}
