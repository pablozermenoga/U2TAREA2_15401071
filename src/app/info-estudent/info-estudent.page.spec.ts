import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoEstudentPage } from './info-estudent.page';

describe('InfoEstudentPage', () => {
  let component: InfoEstudentPage;
  let fixture: ComponentFixture<InfoEstudentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoEstudentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoEstudentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
