import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component43',
  templateUrl: './component43.component.html',
  styleUrls: ['./component43.component.scss']
})
export class Component43Component implements OnInit {

  constructor() { }
  child3: String;
  @Output() exampleOutput = new EventEmitter<string>();
  exampleChild = 'Hello Child 3 here';

  exampleMethodChild() {
    this.exampleOutput.emit(this.exampleChild);
    console.log('child' + this.exampleChild + this.exampleOutput);
  }
  ngOnInit() {
  }

}
