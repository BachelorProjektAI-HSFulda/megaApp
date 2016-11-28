import { Injectable } from '@angular/core';
import { Storage } from './storage';

interface token{
  typ: string;
  id: string;
}

@Injectable()
export class Favorits{
    constructor(private lStorage:Storage){}
    /*
    function that saves a Token with type and id in an
    Array. Thats stored in Window.localStorage "favoriten"
    @param type
    @param id
    */
    public addFav(type : string, id : string){
      if(this.checkFav(id))return;
      let token = this.bindData(type, id);
      let dataFav = this.getFav();
      if(dataFav == null)dataFav = [];
      dataFav.push(token);
      this.lStorage.saveData<token>("fav", dataFav);
    }

    /*
    function that removes a stored token by id
    @param id
    */
    public removeFav(id:string){
      if(this.checkFav(id)){
          let dataFav = this.getFav();
          for(let i = 0; i < dataFav.length; i++){
            if(dataFav[i].id == id){
                dataFav.splice(i,1);
                this.lStorage.saveData<token>("fav", dataFav);
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
    private bindData(type : string, id : string) :token {
      let token : token={
        typ : type,
        id : id
      }
      return token;
    }

    /*
    function that checks if id is already stored
    @param id
    @return a boolean
    */
    private checkFav(id:string) :boolean{
      let dataFav = this.getFav();
      if(dataFav == null) return false;
      for(let i = 0; i < dataFav.length; i++){
        if(dataFav[i].id == id) return true;
      }
      return false;
    }
}
