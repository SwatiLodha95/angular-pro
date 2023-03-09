import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommunicationService } from '../communication.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit, OnDestroy {
myArray: string[] = [];
subscription: Subscription;
  constructor(private commService: CommunicationService) { 
    this.subscription = this.commService.createObservable().subscribe(data =>{
      this.myArray = data as string[];
    }, error =>{
      alert(error);
    }, () =>{
console.log("completed")
    })

  }
ngOnInit(): void {
    this.commService.createObservable().subscribe(data =>{
      this.myArray = data as string[];
    }, error => {
      alert(error);
    }, () => {
      console.log("completed")
    })
   //promise
   this.commService.createPromise().then(data =>{
console.log(data);
   }).catch(error =>{
console.log(error);
   })
   
  }
ngOnDestroy(): void {
  this.subscription.unsubscribe();
}
}
