import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component42',
  templateUrl: './component42.component.html',
  styleUrls: ['./component42.component.scss']
})
export class Component42Component implements OnInit {

  constructor() { }
  @Output() exampleOutput = new EventEmitter<string>();
  exampleMethodParent(value) {
    this.exampleOutput.emit(value);
  }
  ngOnInit() {
  }

}
