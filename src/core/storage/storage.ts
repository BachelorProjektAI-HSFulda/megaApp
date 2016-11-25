import { Injectable } from '@angular/core';

@Injectable()
//genercis hinzufügen
export class Storage{
  public saveData(listName:string ,list : any[]){
    let file : string = JSON.stringify(list);
    window.localStorage.setItem(listName, file);
  }
  //generics hinzufügen
  public getData(listName:string){
    let data = window.localStorage.getItem(listName);
    return JSON.parse(data);
  }
}
