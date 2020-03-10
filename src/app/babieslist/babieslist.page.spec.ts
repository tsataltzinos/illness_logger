import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BabieslistPage } from './babieslist.page';

describe('BabieslistPage', () => {
  let component: BabieslistPage;
  let fixture: ComponentFixture<BabieslistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BabieslistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BabieslistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
