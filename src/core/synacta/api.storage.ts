/*
  TODO stuff

  import in home.ts
  add provider in app.modules.ts

  Add a recently used List
  Add functions to account the recently List
*/

import { Injectable } from '@angular/core';

interface token{
    typ: string;
    id: string;
}

@Injectable()
export class StorageTest{


  /*
  function that saves a Token with type and id in an
  Array. Thats stored in Window.localStorage "favoriten"
  @param type
  @param id
  */
  public addFav(type : string, id : string){
    if(this.checkFav(id))return;
    let token = this.bindData(type, id);
    let dataFav : token[];
    if(window.localStorage.getItem("favoriten") == null){
      dataFav = [];
    } else {
      dataFav = this.getFav();
    }
    dataFav.push(token);
    this.saveData(dataFav);
  }
/*
function that removes a stored token by id
@param id
*/
  public removeFav(id:string){
    if(this.checkFav(id)){
        let dataFav:token[]=this.getFav();
        for(let i = 0; i < dataFav.length; i++){
          if(dataFav[i].id == id){
              dataFav.splice(i,1);
              this.saveData(dataFav);
              return;
          }
        }
    }
  }

  /*
  function that returns an array with tokens
  @return an array with tokens
  */
  public getFav() :token[]{
    let data = window.localStorage.getItem("favoriten");
    let dataFav : token[] = JSON.parse(data);
    return dataFav;
  }

  /*
  function that serialize the favList array and stores it
  in   window.localStorage "favoriten"
  @param favList
  */
  private saveData(favList:token[]){
    let file : string = JSON.stringify(favList);
    window.localStorage.setItem("favoriten", file);
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
    let dataFav : token[] = this.getFav();
    if(dataFav == null) return false;
    for(let i = 0; i < dataFav.length; i++){
      if(dataFav[i].id == id) return true;
    }
    return false;
  }
}
