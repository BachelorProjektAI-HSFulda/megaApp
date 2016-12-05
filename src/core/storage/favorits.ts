import { Injectable } from '@angular/core';
import { Storage } from './storage';
import { SynactaAPIService } from '../synacta/api.service';
import { Entity } from '../synacta/api.objects';

interface token{
  type: string;
  id: string;
}

@Injectable()
export class Favorits{
    favEntitys:Entity[];
    dataFav:token[];

    constructor(private lStorage:Storage, private synAPI: SynactaAPIService){}
    /*
    function that saves a Token with type and id in an
    Array. Thats stored in Window.localStorage "favoriten"
    @param type
    @param id
    */
    public addFav(iEntity :Entity){
      let token = this.bindData(iEntity);
      if(this.checkFav(iEntity))return;
      let dataFav = this.getFav();
      if(dataFav == null)dataFav = [];
      dataFav.push(token);
      this.lStorage.saveData<token>("fav", dataFav);
    }

    /*
    function that removes a stored token by id
    @param id
    */
    public removeFav(iEntity:Entity){
      if(this.checkFav(iEntity)){
          let dataFav = this.getFav();
          for(let i = 0; i < dataFav.length; i++){
            if(dataFav[i].id == iEntity.ID){
                dataFav.splice(i,1);
                this.lStorage.saveData<token>("fav", dataFav);
                this.rmEntity(iEntity);
                return;
            }
          }
      }
    }
    /*
    function that returns an array with tokens
    @return an array with tokens
    */
    public getFav():token[]{
      return this.lStorage.getData<token[]>("fav");
    }

    /*
    function creates a token with type and id for easyer use
    @param type
    @param id
    @return an Objekt from Type Token
    */
    private bindData(iEntity: Entity) :token {
      let type = iEntity.ObjectType;
      let id = iEntity.ID;
      let token : token={
        type :type,
        id :id
      }
      return token;
    }

    /*
    function that checks if id is already stored
    @param id
    @return a boolean
    */
    private checkFav(iEntity:Entity) :boolean{
      let dataFav = this.getFav();
      if(dataFav == null) return false;
      for(let i = 0; i < dataFav.length; i++){
        if(dataFav[i].id == iEntity.ID) return true;
      }
      return false;
    }

    //just for small Testings
    public addTest(type : string, id : string){
      //if(this.checkFav(id))return;
      let dataFav = this.getFav();
      if(dataFav == null) return false;
      for(let i = 0; i < dataFav.length; i++){
        if(dataFav[i].id == id) return true;
      }
      let token:token={
        id : id,
        type : type
      }
      if(dataFav == null)dataFav = [];
      dataFav.push(token);
      this.lStorage.saveData<token>("fav", dataFav);
    }


    public loadEntitys():Entity[]{
      let dataFav = this.getFav();
      this.favEntitys = new Array<Entity>();
      for(let i = 0; i< dataFav.length; i++){
        this.synAPI.getByID(dataFav[i].type, dataFav[i].id)
          .subscribe(response => this.favEntitys.push(response));
      }
      return this.favEntitys;
    }

    public getEntitys(){
      return this.favEntitys;
    }

    private rmEntity(iEntity:Entity){
      for(let i=0; i<this.favEntitys.length; i++){
        if(this.favEntitys[i].ID == iEntity.ID){
            this.favEntitys.splice(i,1);
            return;
        }
      }
    }
    private addEntity(iEntity:Entity){
      this.synAPI.getByID(iEntity.ObjectType, iEntity.ID)
      .subscribe(response => this.favEntitys.push(response));
    }

}
