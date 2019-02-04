import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component51',
  templateUrl: './component51.component.html',
  styleUrls: ['./component51.component.scss']
})
export class Component51Component implements OnInit {

  constructor() { }
  @Output() exampleOutput = new EventEmitter<string>();
  methodParent(value) {
    this.exampleOutput.emit(value);
    console.log('parent' + value);
  }
  ngOnInit() {
  }

}
