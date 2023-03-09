import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-data-directive',
  templateUrl: './data-directive.component.html',
  styleUrls: ['./data-directive.component.css']
})
export class DataDirectiveComponent implements OnInit {
  isShow = false;
 arr = [10, 20, 30, 40, 50];
 userArray = [
  {
    id: 101,
    name:"Swati",
    goal: "Angular DEveloper"
     
  },
  {
    id: 102,
    name:"Deepti",
    goal: "Lowyer"
     
  },
  {
    id: 103,
    name:"Shruti",
    goal: "Doctor"
     
  },
  {
    id: 104,
    name:"Twisha",
    goal: "Dancer"
     
  },
  {
    id: 105,
    name:"Vidhita",
    goal: "Dramebaaz"
     
  },
  {
    id: 106,
    name:"Gudiya",
    goal: "Scientist"
     
  },
 ];
 city = "ner";
// dropdownList = [];
// selectItems = [];
// dropdownSetting = [];
  constructor() { }

  ngOnInit(): void {
  }
toggle(){
  this.isShow = !this.isShow
}
}
