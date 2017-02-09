import { Injectable } from '@angular/core';
import { Storage } from './storage';
import { SynactaAPIService, MockupUser } from '../synacta/api.service';
import { Container, Document } from '../synacta/api.objects';


@Injectable()
export class SearchService {
  dataAkte : Container[];
  dataVorgang : Container[];
  demoUser:MockupUser;
  currentSearch:string;

    //Creating a demoUser
    constructor(private synAPI: SynactaAPIService){
      this.demoUser = synAPI.demoUser;
    }

    /*
    * This function uses a type and an id (organization id) of a demoUser to receive all necessary
    * data. Then search the data for documents matching the specified search string
    * @param searchString
    * @return documents array
    */


    public search(searchString:string):Promise<Document[]>{
      let stuff = new Array<Document>();
      this.currentSearch = searchString;
      console.log(searchString);
      if(searchString == ""){
        return Promise.resolve(stuff);
      }

      let searchResults = new Array<Document>();

      for(var org of this.demoUser.Orgs){
        let test = 0;
        console.log("Usertest", test+1);
        this.synAPI.getContainersByOrg("Akte", org, null).subscribe(
          response => this.dataAkte = response,
          error => console.log(error),
          () => {
            let countAkte = 0;
            for(let item of this.dataAkte){
              console.log("akte:", countAkte+1);
              let tmp:Document[];
              let co =0;
              this.synAPI.getDocuments(item).subscribe(
                dokuments => tmp = dokuments,
                error => console.log(error),
                () => {
                  // console.log("doctest", co+1);
                  // console.log(tmp);
                  // if(tmp == null){
                  //   return;
                  // }
                  for(let doc of tmp){
                    if(doc.Properties.Titel.search(searchString)!=-1){
                      stuff.push(doc)
                    }
                  }
                } );
              }
            }
          );

        // this.synAPI.getContainersByOrg("Vorgang", org, null).subscribe(
        //   response => this.dataVorgang = response,
        //   error => console.log(error),
        //   () => {
        //     for(let item of this.dataVorgang){
        //       let tmp:Document[];
        //       this.synAPI.getDocuments(item).subscribe(
        //         dokuments => tmp = dokuments,
        //         error => console.log(error),
        //         () => {
        //           for(let doc of tmp){
        //             if(doc.Properties.Name.search(searchString)!=-1){
        //               this.data.push(doc)
        //             }
        //           }
        //         } );
        //       }
        //   }
        // );
      }
      //Filter again and get lost of doubles

      // this.data = this.checkDoubles();
      console.log("Finish");
      console.log(stuff);
      if(this.currentSearch != searchString){
        stuff = new Array<Document>();
        return Promise.resolve(stuff);
      }
      return Promise.resolve(stuff);
    }

    public checkDoubles(data){
      if(data == undefined){
        return data = new Array<any>();
      }
      let tmp = new Array<Document>();
      for(let item of data){
        if(item.Properties.Titel.search(this.currentSearch)!= -1){
          let check:boolean = false;
          for(let test of tmp){
            check = (item.ID == test.ID)? true:false;
          }
          if(check){
            tmp.push(item);
          }
        }
        return tmp;
      }
    }
}
