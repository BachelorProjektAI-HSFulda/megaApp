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
     public get(target: string, type: string, id:string) {
         let headers = new Headers(this.baseHeaders);
         let endpoint = BASE_URL;
         endpoint = (type)? endpoint + type : endpoint;
         endpoint = (id)? endpoint + "/" +id : endpoint;
         endpoint = (target)? endpoint + target : endpoint;
         return this.http
             .get(endpoint, {headers: headers})
             .map(response => response.json());
     }

     public getRoot(type:string, id: string){
	     return this.get("root", null, null);
     }

     public getByID(type:string, id: string){
       return this.get(null, type, id);
     }
     public getByType(type:string){
       return this.get(null, type, null);
     }

     public getChildren(type: string, id:string){
       return this.get("Children", type, id);
     }

     public getChildTypes(type:string, id: string){
       return this.get("Children/Types", type, id);
     }

     public getDocuments(type:string, id: string){
       return this.get("Documents", type, id);
     }

     public getDocTypes(type:string, id: string){
       return this.get("Document/Types", type, id);
     }
}
