import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowsdetailPage } from './showsdetail.page';

describe('ShowsdetailPage', () => {
  let component: ShowsdetailPage;
  let fixture: ComponentFixture<ShowsdetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowsdetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowsdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
