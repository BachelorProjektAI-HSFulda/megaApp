import { Injectable } from '@angular/core';
import { Storage } from './storage';
import { SynactaAPIService } from '../synacta/api.service';
import { Container } from '../synacta/api.objects';

interface User{
  name: string;
  org: any[];
}

@Injectable()
export class Search {
  data : Container[];
  dataAkte : Container[];
  dataVorgang : Container[];
  demoUser:User;

    constructor(private synAPI: SynactaAPIService){
      this.demoUser  ={
        name: "Test",
        org: ["42"]
      };
    }

    public search(searchString:string):Container[]{
      let searchResults = new Array<Container>();

      for(var item of this.demoUser.org){
        this.synAPI.getByOrgID(item, "/Akte").subscribe(
          response => this.dataAkte = response,
          error => console.log(error),
          () => {
            for(let item of this.dataAkte){
              if(item.Properties.Aktenzeichen.search(searchString)!=-1){searchResults.push(item);}
              else if(item.Properties.Aktenbetreff.search(searchString)!=-1){searchResults.push(item);}
              else if(item.Properties["Erstellt von"].search(searchString)!=-1){searchResults.push(item);}
            }
          }
        );

        this.synAPI.getByOrgID(item, "/Vorgang").subscribe(
          response => this.dataVorgang = response,
          error => console.log(error),
          () => {
            for(let item of this.dataVorgang){
              if(item.Properties.Aktenzeichen.search(searchString)!=-1)searchResults.push(item);
              else if(item.Properties.Vorgangsbetreff.search(searchString)!=-1)searchResults.push(item);
              else if(item.Properties["Erstellt von"].search(searchString)!=-1) searchResults.push(item);
            }
          }
        );
      }
      this.data = searchResults;
      return searchResults;
    }

    public getResults():Container[]{
      return this.data;
    }
}
