import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Childcomponent1Component } from './childcomponent1.component';

describe('Childcomponent1Component', () => {
  let component: Childcomponent1Component;
  let fixture: ComponentFixture<Childcomponent1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Childcomponent1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Childcomponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
