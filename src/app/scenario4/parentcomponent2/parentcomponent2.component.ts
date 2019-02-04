import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { Childcomponent2Component } from '../childcomponent2/childcomponent2.component';

@Component({
  selector: 'app-parentcomponent2',
  templateUrl: './parentcomponent2.component.html',
  styleUrls: ['./parentcomponent2.component.scss']
})
export class Parentcomponent2Component implements AfterViewInit {

  constructor() { }
  varParent: String;
  @ViewChild(Childcomponent2Component) child;

  ngAfterViewInit() {
    this.varParent = this.child.str;
    console.log('parent', this.varParent);
  }

}
