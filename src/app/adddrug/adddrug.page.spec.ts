import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddrugPage } from './adddrug.page';

describe('AdddrugPage', () => {
  let component: AdddrugPage;
  let fixture: ComponentFixture<AdddrugPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdddrugPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddrugPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
