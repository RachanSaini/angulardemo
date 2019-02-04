import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component52Component } from './component52.component';

describe('Component52Component', () => {
  let component: Component52Component;
  let fixture: ComponentFixture<Component52Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component52Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component52Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
