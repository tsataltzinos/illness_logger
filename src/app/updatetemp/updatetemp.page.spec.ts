import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatetempPage } from './updatetemp.page';

describe('UpdatetempPage', () => {
  let component: UpdatetempPage;
  let fixture: ComponentFixture<UpdatetempPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatetempPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatetempPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
