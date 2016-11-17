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
       let url = BASE_URL + type + "/" + id;
       return this.http
           .get(url, {headers: this.baseHeaders})
           .map(response => response.json());
     }

     public getByID(type:string, id: string){
       let url = BASE_URL + type + "/" + id;
       return this.http
           .get(url, {headers: this.baseHeaders})
           .map(response => response.json());
     }
     public getByType(type:string){
       let url = BASE_URL + type;
       return this.http
          .get(url, {headers: this.baseHeaders})
          .map(response => response.json());
     }

     public getChildren(type: string, id:string){
       let url = BASE_URL + type + "/" + id + "/Children";
       return this.http
           .get(BASE_URL + '/{type}/{id}/Children', {headers: this.baseHeaders})
           .map(response => response.json());
     }

     public getChildTypes(type:string, id: string){
       let url = BASE_URL + type + "/" + id +"/Children/types";
       return this.http
           .get(url, {headers: this.baseHeaders})
           .map(response => response.json());
     }

     public getDocuments(type:string, id: string){
       let url = BASE_URL + type + "/" + id + "/Documents";
       return this.http
           .get(url, {headers: this.baseHeaders})
           .map(response => response.json());
     }

     public getDocTypes(type:string, id: string){
       let url = BASE_URL + type + "/" + id + "/Documents/Types";
       return this.http
           .get(url, {headers: this.baseHeaders})
           .map(response => response.json());
     }
}
