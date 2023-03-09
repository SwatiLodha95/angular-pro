import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
title =  "Carriar";
x: number;
arr = [10, 20, 30, 40, 50
]
able = false;
  constructor() {
    this.x = 0;
   }

  ngOnInit(): void {
  }
my() {
  this.able = !this.able;
}
}
