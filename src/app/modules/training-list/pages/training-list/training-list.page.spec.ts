import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingListPage } from './training-list.page';

describe('HomePage', () => {
  let component: TrainingListPage;
  let fixture: ComponentFixture<TrainingListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TrainingListPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
