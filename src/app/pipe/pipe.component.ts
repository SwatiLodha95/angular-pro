import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
name = "Swati";
dob = "1667902635";
user = {
  id: 1,
  name: "swati",
  age: 26,
  isMarried:  false,
  addres: {
    city: "Pune",
    pincode: 412207
  },
  langsKnown: ["Hindi","Marathi","English"]
}
arr = ["Jan","Feb","March","April","May","June","July","Aug","Sep","Oct","Nov","December"];
  constructor() { }

  ngOnInit(): void {
  }

}
