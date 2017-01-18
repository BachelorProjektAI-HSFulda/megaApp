import { Injectable } from '@angular/core';
import { Storage, Token } from './storage';
import { SynactaAPIService } from '../synacta/api.service';
import { Entity } from '../synacta/api.objects';

const MAXITEMS = 30;

interface ExpToken extends Token {
  TimeStamp : Date;
}
export interface ExpEntity extends Entity{
  TimeStamp : Date;
}

@Injectable()
export class RecentList{
  recList:ExpEntity[];
    constructor(private lStorage:Storage, private synAPI: SynactaAPIService){}

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
      if(dataRec == null)dataRec = [];
      if(dataRec.length == MAXITEMS){
        dataRec.pop();
      }
      dataRec.push(ExpToken);
      this.lStorage.saveData<ExpToken>("rec", dataRec);
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


    public loadEntitys():ExpEntity[]{
      let dataRec = this.getRec();
      this.recList = new Array<ExpEntity>();
      for(let item of dataRec){
        this.synAPI.getByID(item.Type, item.ID)
        .subscribe(response => {
          let expResponse = this.morphEntity(response, item.TimeStamp);
          this.recList.push(expResponse)});
      }
      return this.recList;
    }

    public getEntitys():ExpEntity[]{
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

    private morphEntity(iEntity:Entity, timestamp:Date):ExpEntity{
        let expEntity : ExpEntity={
          Properties: iEntity.Properties,
          PropertyInfos: iEntity.PropertyInfos,
          ID: iEntity.ID,
          ObjectType: iEntity.ObjectType,
          ParentID: iEntity.ParentID,
          ParentType: iEntity.ParentType,
          Frozen: iEntity.Frozen,
          Hash: iEntity.Hash,
          ReadLink: iEntity.ReadLink,
          FullODataLink: iEntity.FullODataLink,
          TimeStamp: timestamp
        }
        return expEntity;
    }

  }
