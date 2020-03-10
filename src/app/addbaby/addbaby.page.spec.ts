import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbabyPage } from './addbaby.page';

describe('AddbabyPage', () => {
  let component: AddbabyPage;
  let fixture: ComponentFixture<AddbabyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddbabyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbabyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
