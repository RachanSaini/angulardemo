import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-childcomponent2',
  templateUrl: './childcomponent2.component.html',
  styleUrls: ['./childcomponent2.component.scss']
})
export class Childcomponent2Component {

  constructor() { }
  str: string;
  getInputUser(value: string) {

    this.str = value;
    console.log(value);
  }


}
