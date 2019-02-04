import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component51Component } from './component51/component51.component';
import { Component52Component } from './component52/component52.component';
import { Component53Component } from './component53/component53.component';

@NgModule({
  declarations: [Component51Component, Component52Component, Component53Component],
  imports: [
    CommonModule
  ],
  exports: [
    Component51Component,
    Component52Component,
    Component53Component
  ]
})
export class Scenario6Module { }
