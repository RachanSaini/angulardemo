import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component41Component } from './component41/component41.component';
import { Component42Component } from './component42/component42.component';
import { Component43Component } from './component43/component43.component';

@NgModule({
  declarations: [Component41Component, Component42Component, Component43Component],
  imports: [
    CommonModule
  ],
  exports: [ Component41Component, Component42Component, Component43Component]
})
export class Scenario5Module { }
