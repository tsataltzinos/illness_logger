import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtempPage } from './addtemp.page';

describe('AddtempPage', () => {
  let component: AddtempPage;
  let fixture: ComponentFixture<AddtempPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtempPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtempPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
