import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Parentcomponent2Component } from './parentcomponent2/parentcomponent2.component';
import { Childcomponent2Component } from './childcomponent2/childcomponent2.component';

@NgModule({
  declarations: [
    Parentcomponent2Component,
    Childcomponent2Component
    ],
  imports: [
    CommonModule
  ],
  exports: [
    Parentcomponent2Component,
    Childcomponent2Component
  ]
})
export class Scenario4Module { }
