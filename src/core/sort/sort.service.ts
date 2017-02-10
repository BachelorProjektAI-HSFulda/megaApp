import { Injectable} from '@angular/core';
import { Container } from '../synacta/api.objects'




@Injectable()
export class SortService{

  public sortByDate(newFirst:boolean, modified:boolean, list:Container[]):Container[]{
    console.log(list);
    let search:string = (modified)? "Erstellt am" : "Geändert am";
    list.sort(function(a:Container, b:Container){
      let dataA:string = a.Properties["Erstellt am"].slice(0,10);
      let dataB:string = b.Properties["Erstellt am"].slice(0,10);

      let ans:number = dataA.localeCompare(dataB);

      ans = (newFirst)? ans * (-1): ans;

      return ans;
    })
    return list;
  }

  public sortByAktenzeichen(up:boolean, list:Container[]):Container[]{
    console.log(list);
    list.sort(function(a:Container, b:Container){
      let dataA:string = a.Properties["Aktenzeichen"];
      let dataB:string = b.Properties["Aktenzeichen"];

      let ans:number = dataA.localeCompare(dataB);

      ans = (up)? ans * (-1): ans;

      return ans;
    })
    return list;
  }
}
