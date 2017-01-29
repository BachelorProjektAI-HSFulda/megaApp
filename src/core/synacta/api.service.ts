import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
// TODO shorten with systemjs
import 'rxjs/add/operator/map';

import { Observable } from 'rxjs/Observable';

import 'rxjs/Rx';

import { deserialize } from 'json-typescript-mapper';

import { IFrame, Frame, Entity, Container, Document } from './api.objects';

const API_KEY = 'Token FHProjekt2016';
const API_URL = 'https://synacta.agile-is.de/_api/';

export interface MockupUser {
	Name: string;
	Orgs: string[];
}

@Injectable()
export class SynactaAPIService {

	demoUser : MockupUser;
    retries: number;
    baseHeaders: Headers = new Headers();

    constructor(private http: Http) {
        this.baseHeaders.append("Authorization", API_KEY);
		this.demoUser ={
			Name: "Team1",
			Orgs: ["1011", "1012"]
		};
        this.retries = 5;
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
    private getBase(target: string, type: string, id: string) {
         let endpoint = API_URL;
         endpoint = endpoint + "base";
         endpoint = (type)? endpoint + "/" + type : endpoint;
         endpoint = (id)? endpoint + "/" + id : endpoint;
         endpoint = (target) ? endpoint + "/" + target : endpoint;
         return this.getByLink(endpoint);
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
     private getOrg(target: string, type: string, id: string, searchString: string) {
         let endpoint = API_URL;
         endpoint = endpoint + "org/";
         endpoint = (id)? endpoint + id : endpoint;
         endpoint = (type)? endpoint + "/" + type : endpoint;
         endpoint = (target)? endpoint + "/" + target : endpoint;
				 endpoint = (searchString)? endpoint + "?$filter=contains(" + searchString + ")" : endpoint;
         return this.getByLink(endpoint);
     }

    /*
     *
     */
     private postBase(target: string, type: string, id: string, body: Entity) {
         let object = JSON.stringify(body);
         let endpoint = API_URL;
         endpoint = endpoint + "base/";
         endpoint = (type)? endpoint + type : endpoint;
         endpoint = (id)? endpoint + "/" + id : endpoint;
         endpoint = (target) ? endpoint + "/" + target : endpoint;
         return this.postByLink(endpoint, object);
     }

    /*
     *
     */
     private deleteBase(target: string, type: string, id: string) {
         let endpoint = API_URL;
         endpoint = endpoint + "base/";
         endpoint = (type)? endpoint + type : endpoint;
         endpoint = (id)? endpoint + "/" + id : endpoint;
         endpoint = (target) ? endpoint + "/" + target : endpoint;
         return this.deleteByLink(endpoint);
     }

     /*
      * Receive an object by navigation link
      * @param endpoint
      * @returns an observable response object containing a json object
      */
     private getByLink(endpoint: string) {
         let headers = new Headers(this.baseHeaders);
         return this.http
             .get(endpoint, {headers: headers})
             .retry(this.retries)
             .map(response => response.json());
     }

    /*
     *
     */
     private postByLink(endpoint: string, body: string) {
         let headers = new Headers(this.baseHeaders);
         return this.http
            .post(endpoint, {body}, {headers: headers})
            .map(response => response.json());
     }

    /*
     *
     */
     private deleteByLink(endpoint: string) {
         let headers = new Headers(this.baseHeaders);
         return this.http
            .delete(endpoint, {headers: headers})
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
            .getBase("root", null, null)
            .retry(this.retries)
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
             .getBase(null, type, id)
             .retry(this.retries)
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
             .getBase(null, type, null)
             .retry(this.retries)
             .map((json: IFrame) => {
                let result = new Array<Container>();
                for (let value of json.value) {
                    result.push(deserialize(Container, value));
                }
                return result;
             });
     }

    /*
     * This function receives N child elements of a specific entity object,
     * starting at offset X.
     * Default is offset 0 and num of elements 20.
     * This function receives an IFrame
     * @param container
     * @param num
     * @param offset
     * @return an observable containing a list of Entity
     */
     public getChildren(container: Container, num: Number = 20, offset: Number = 0): Observable<Entity[]> {
         // TODO - Implement offset
         // TODO - Implement hasChild?
         // $top is the number of elements RESTful variable
         return this
             .getBase("Children?$top=" + num, container.ObjectType, container.ID)
             .retry(this.retries)
             .map((json: IFrame) => {
                 let result = new Array<Entity>();
                 for (let value of json.value) {
                     // The existence of the 'Name' field is our only checked hint
                     // at the moment to distinguish between containers and documents
                     if (value["Name"]) {
                        result.push(deserialize(Document, value));
                     } else {
                        result.push(deserialize(Container, value));
                     }
                 }
                 return result;
             });
     }

    /*
     * This function uses type and id to receive a string list of the types of
     * all present childs
     * This function receives an IFrame
     * @param container
     * @return an observable which contains a string list
     */
     public getChildTypes(container: Container): Observable<String[]> {
         return this
             .getBase("Children/Types", container.ObjectType, container.ID)
             .retry(this.retries)
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
     * @param container
     * @return an observable containing a list of Document
     */
     public getDocuments(container: Container): Observable<Document[]> {
         return this
             .getBase("Documents", container.ObjectType, container.ID)
             .retry(this.retries)
             .map((json: IFrame) => {
                 let result = new Array<Document>();
                 for (let value of json.value) {
                     result.push(deserialize(Document, value));
                 }
                 return result;
             });
     }

    /*
     * This function uses type and id to receive a string list of all the types
     * of the present documents of the container
     * @param container
     * @return an observable which contains a string list
     */
     public getDocTypes(container: Container): Observable<String[]> {
         return this
             .getBase("Documents/Types", container.ObjectType, container.ID)
             .retry(this.retries)
             .map((json: IFrame) => {
                 let result = new Array<String>();
                 for (let value of json.value) {
                     result.push(new String(value));
                 }
                 return result;
             });
     }

    /*
     * This function uses a type and an id to receive the parent of a specific
     * entity
     * @param entity
     * @return an observable containing a container object
     */
     public getParent(entity: Entity): Observable<Container> {
         return this.getByID(entity.ParentType,entity.ParentID)
            .retry(this.retries);
    }

   /*
    * This function deletes a given container
    * @param container
    */
    public deleteEntity(entity: Entity): Observable<String>{
        return this.deleteBase(null, entity.ObjectType, entity.ID);
    }

   /* This function uses a type and an id of a document to receive
    * the file in it
    * @param document
    * @return
    */
    public getFile(document: Document): Observable<String>{
        return this.getBase("GetFile",document.ObjectType,document.ID);
    }

    public moveEntity(entity: Entity,parent: Container): void{
        entity.ParentID = parent.ID;
        this.postBase("Move",entity.ObjectType,entity.ID,entity);
    }

   /*
    * This function uses a type and an id to receive a conatiner list of one type
    * @param type
    * @param id
    * @return an observable containing a container list
    */
    public getContainersByOrg(type: string, id: string, searchString: string): Observable<Container[]>{
        let search = (searchString == undefined)? null : searchString;
		return this.getOrg(null,type,id,search)
		    .retry(this.retries)
            .map((json: IFrame) => {
                let result = new Array<Container>();
                for (let value of json.value) {
                    // The existence of the 'Name' field is our only checked hint
                    // at the moment to distinguish between containers and documents
                    result.push(deserialize(Container, value));
                }
                return result;
            });
    }

}
