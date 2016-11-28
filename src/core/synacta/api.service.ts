import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
// TODO shorten with systemjs
import 'rxjs/add/operator/map';

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
     * returns an observable Json object
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
    function that gets the root of Synacta. It needs no parameters. 
    The function is getting the root by using the function get.
    @return an observable Entity object from function createObject
    */
     public getRoot(){
         return createObject(this.get("root",null,null));
     }


    /*
    function that gets an element out of Synacta by using the ID. 
    @param type
    @param id  
    @return an observable Entity object from function createObject
    */
     public getByID(type:string, id: string){
       return createObject(this.get(null, type, id));
     }

    /*
    function that gets an element out of Synacta by using the type. 
    @param type
    
    @return an observable Entity object from function createObject
    */
     public getByType(type:string){
       return createObject(this.get(null, type, null));
     }

    /*
    function that gets all the Children ob an Element using the type and the id. 
    @param type
    @param id  
    @return an observable Entity object from function createObject
    */
     public getChildren(type: string, id:string){
       return createObject(this.get("Children", type, id));
     }

    /*
    function that gets the types of all Children by using the type and the id of the container.
    @param type
    @param id  
    @return an observable Entity object from function createObject
    */
     public getChildTypes(type:string, id: string){
       return createObject(this.get("Children/Types", type, id));
     }

    /*
    function that gets all document in Container using the type and the id of the container. 
    @param type
    @param id  
    @return an observable Entity object from function createObject
    */
     public getDocuments(type:string, id: string){
       return createObject(this.get("Documents", type, id));
     }

    /*
    function that gets the types of the documents in the container using 
    the type and the id of the container.
    @param type
    @param id  
    @return an observable Entity object from function createObject
    */
     public getDocTypes(type:string, id: string){
       return createObject(this.get("Document/Types", type, id));
     }
}
