import { Component, OnDestroy, OnInit } from '@angular/core';
import { SubService } from 'src/app/sub.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-received-message',
  templateUrl: './received-message.component.html',
  styleUrls: ['./received-message.component.css']
})
export class ReceivedMessageComponent implements OnInit, OnDestroy {
receivedData = ""; 
subscription: Subscription;
  constructor(private subservice: SubService) {
    
  this.subscription =   this.subservice.sendSubjectAsObservable().subscribe(data =>{
      this.receivedData = data as string;
    })
   }

  ngOnInit(): void {
  }
ngOnDestroy(){
  this.subscription.unsubscribe();
}
}
