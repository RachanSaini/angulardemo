import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component53',
  templateUrl: './component53.component.html',
  styleUrls: ['./component53.component.scss']
})
export class Component53Component implements OnInit {

  constructor() { }

  @Output() exampleOutput = new EventEmitter<string>();

  exampleMethodChild(value: string) {
    this.exampleOutput.emit(value);
    console.log('child 1 ' + value);
  }
  ngOnInit() {
  }

}
