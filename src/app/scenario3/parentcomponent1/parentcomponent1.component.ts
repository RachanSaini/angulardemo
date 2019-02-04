import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parentcomponent1',
  templateUrl: './parentcomponent1.component.html',
  styleUrls: ['./parentcomponent1.component.scss']
})
export class Parentcomponent1Component implements OnInit {

  constructor() { }
  parentmessage = 'i am your parent you know??????';
  // childmessage: 'parent to child communication';

  ngOnInit() {
  }

}
