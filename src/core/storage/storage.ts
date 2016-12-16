import { Injectable } from '@angular/core';


export interface Token{
  Type: string;
  ID: string;
}

@Injectable()
export class Storage{

  /*
  function that serialize the favList array and stores it
  in   window.localStorage "favoriten"
  @param listName
  @param list
  */
  public saveData<list>(listName:string ,list : list[]){
    let file : string = JSON.stringify(list);
    window.localStorage.setItem(listName, file);
  }

  /*
  function that returns an array with tokens
  @return an array with tokens
  */
  public getData<list>(listName:string):list{
    let data = window.localStorage.getItem(listName);
    return JSON.parse(data);
  }
}
