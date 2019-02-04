import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-childcomponent1',
  templateUrl: './childcomponent1.component.html',
  styleUrls: ['./childcomponent1.component.scss']
})
export class Childcomponent1Component implements OnInit {

  constructor() { }

  @Input() childmessage: string;
  ngOnInit() {
  }

}
