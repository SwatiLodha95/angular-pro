import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SubService {
  subject = new Subject();

  constructor() { }
  sendMessage(mesg: string){
    this.subject.next(mesg);
  }
  resetMessage(){
    this.subject.next("");
  }
  sendSubjectAsObservable(){
    return this.subject.asObservable();
  }
}

