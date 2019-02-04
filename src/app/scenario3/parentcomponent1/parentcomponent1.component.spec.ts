import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Parentcomponent1Component } from './parentcomponent1.component';

describe('Parentcomponent1Component', () => {
  let component: Parentcomponent1Component;
  let fixture: ComponentFixture<Parentcomponent1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Parentcomponent1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Parentcomponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
