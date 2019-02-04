import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Parentcomponent1Component } from './parentcomponent1/parentcomponent1.component';
import { Childcomponent1Component } from './childcomponent1/childcomponent1.component';

@NgModule({
  declarations: [
    Parentcomponent1Component,
    Childcomponent1Component
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Parentcomponent1Component,
    Childcomponent1Component
  ]
})
export class Scenario3Module { }
