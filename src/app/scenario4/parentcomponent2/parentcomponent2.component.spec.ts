import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Parentcomponent2Component } from './parentcomponent2.component';

describe('Parentcomponent2Component', () => {
  let component: Parentcomponent2Component;
  let fixture: ComponentFixture<Parentcomponent2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Parentcomponent2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Parentcomponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
