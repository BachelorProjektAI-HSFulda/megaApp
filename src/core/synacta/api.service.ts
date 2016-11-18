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
         let endpoint = (target)? BASE_URL + target : BASE_URL;
         let headers = new Headers(this.baseHeaders);
         if (type) {
             headers.append("type", type);
         }
         if (id) {
             headers.append("id", id);
         }
         console.log(endpoint, target);
         return this.http
             .get(endpoint, {headers: headers})
             .map(response => response.json());
     }

     public getRoot(type:string, id: string){
	 return get("root", null, null);
     }

     public getByID(type:string, id: string){
       return get(null, type, id);
     }
     public getByType(type:string){
       return get(null, type, null);
     }

     public getChildren(type: string, id:string){
       return get("Children", type, id);
     }

     public getChildTypes(type:string, id: string){
       return get("Children/Types", type, id);
     }

     public getDocuments(type:string, id: string){
       return get("Documents", type, id);
     }

     public getDocTypes(type:string, id: string){
       return get("Document/Types", type, id);
     }
}
