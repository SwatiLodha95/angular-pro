import { Component, OnInit } from '@angular/core';
import { SubService } from 'src/app/sub.service';
@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css']
})
export class SendMessageComponent implements OnInit {
msg = "";
  constructor(private subService: SubService) { }

  ngOnInit(): void {
  }
send(){
 this.subService.sendMessage(this.msg);

}
reset(){
  this.subService.resetMessage();
    this.msg = "";

}
}