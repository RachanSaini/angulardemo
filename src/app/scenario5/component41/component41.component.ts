import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component41',
  templateUrl: './component41.component.html',
  styleUrls: ['./component41.component.scss']
})
export class Component41Component implements OnInit {

  constructor() { }
  exampleGrandParent: string;
  methodGrandparent(value) {
    this.exampleGrandParent = value;
    console.log('grandparent' + this.exampleGrandParent);
  }
  ngOnInit() {
  }

}
