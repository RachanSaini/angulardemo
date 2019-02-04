import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component52',
  templateUrl: './component52.component.html',
  styleUrls: ['./component52.component.scss']
})
export class Component52Component implements OnInit {

  constructor() { }
  child: string;
  methodChild(value) {
    this.child = value;
    console.log('final child' + value);
  }
  ngOnInit() {
  }

}
