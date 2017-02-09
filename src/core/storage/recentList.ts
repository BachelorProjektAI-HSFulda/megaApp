import { Injectable } from '@angular/core';
import { Storage, Token } from './storage';
import { SynactaAPIService } from '../synacta/api.service';
import { Entity } from '../synacta/api.objects';

const MAXITEMS = 10;

interface ExpToken extends Token {
  TimeStamp : Date;
}
// export interface Entity extends Entity{
//   TimeStamp : Date;
// }

@Injectable()
export class RecentList{
  recList:Entity[];
    constructor(private lStorage:Storage, private synAPI: SynactaAPIService){
      if(!window.localStorage.getItem('rec')){
        this.addTest("Plan", "3df202ad-91b2-413a-9847-d12d536ed813");
      }

    }

    /*
    function that saves a ExpToken with type and id in an
    Array. Thats stored in Window.localStorage "favoriten"
    @param type
    @param id
    */
    public addRec(iEntity :Entity){
      let ExpToken = this.bindData(iEntity);
      if(this.checkRec(iEntity))return;
      let dataRec = this.getRec();
      console.log(dataRec, " bla" , dataRec.length)
      if(dataRec == null)dataRec = [];
      if(dataRec.length >= MAXITEMS){
        console.log("er sollte")
        dataRec.splice(0,1);
      }
      dataRec.push(ExpToken);
      this.lStorage.saveData<ExpToken>("rec", dataRec);
      this.loadEntitys();
    }


    /*
    function that returns an array with ExpTokens
    @return an array with ExpTokens
    */
    public getRec():ExpToken[]{
      return this.lStorage.getData<ExpToken[]>("rec");
    }

    /*
    function creates a ExpToken with type and id for easyer use
    @param iEntity : Entity
    @return an Objekt from Type ExpToken
    */
    private bindData(iEntity: Entity) :ExpToken {
      let ExpToken : ExpToken={
        Type :iEntity.ObjectType,
        ID : iEntity.ID,
        TimeStamp : new Date()
      }
      return ExpToken;
    }

    /*
    function that checks if id is already stored
    @param id
    @return a boolean
    */
    private checkRec(iEntity:Entity) :boolean{
      let dataRec = this.getRec();
      if(dataRec == null) return false;
      for(let i = 0; i < dataRec.length; i++){
        if(dataRec[i].ID == iEntity.ID) {
          let expToken = this.bindData(iEntity);
          dataRec.splice(i,1);
          dataRec.push(expToken);
          this.lStorage.saveData<ExpToken>("rec", dataRec);
          return true;
        }
      }
      return false;
    }

    //just for small Testings
    public addTest(type : string, id : string){
      let dataRec = this.getRec();
      if(dataRec == null) dataRec = new Array<ExpToken>();
      for(let i = 0; i < dataRec.length; i++){
        if(dataRec[i].ID == id) return true;
      }
      let ExpToken : ExpToken={
        Type :type,
        ID :id,
        TimeStamp : new Date()
      }
      if(dataRec == null)dataRec = [];
      dataRec.push(ExpToken);
      this.lStorage.saveData<ExpToken>("rec", dataRec);
    }


    public loadEntitys():Entity[]{
      let dataRec = this.getRec();
      console.log("schau nicht hier her",dataRec);
      this.recList = new Array<Entity>();
      for(let item of dataRec){
        console.log(item);
        this.synAPI.getByID(item.Type, item.ID)
        .subscribe(response => {
          // let expResponse = this.morphEntity(response, item.TimeStamp);
          this.recList.push(response);
        });
      }
      console.log("schau mal her", this.recList);
      this.sortRecList();
      return this.recList;
    }

    public getEntitys():Entity[]{
      return this.recList;
    }

    private rmEntity(iEntity:Entity){
      for(let i=0; i<this.recList.length; i++){
        if(this.recList[i].ID == iEntity.ID){
            this.recList.splice(i,1);
            return;
        }
      }
    }

    public sortRecList(){
      let dataRec = this.getRec();
      let tmp = this.recList;
      this.recList = new Array<Entity>();

      for(let item of dataRec){
        for(let nr = 0; nr < tmp.length; nr++){
          if(item.ID == tmp[nr].ID){
            this.recList.push(tmp[nr]);
            tmp.splice(nr,1);
          }
        }
      }
    }
  }
