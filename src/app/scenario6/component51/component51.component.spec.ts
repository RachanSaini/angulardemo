import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component51Component } from './component51.component';

describe('Component51Component', () => {
  let component: Component51Component;
  let fixture: ComponentFixture<Component51Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component51Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component51Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
