import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

 
  arr = ["HTML", "CSS" , "Bootstrap" , "JS" , "Angular"]

  constructor() { }
  createObservable(){
    return new Observable(subscribe =>{
if (this.arr.length > 0){
  subscribe.next(this.arr);
}
else {
  subscribe.error("no data found");
}
subscribe.complete();
    })
  }
  createPromise(){
    return new Promise((resolve, reject) =>{
      if (this.arr.length > 0){
        resolve(this.arr);
      } else{
        reject("no data found");
      }
    })
  }
}
