import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalRecord } from './personal-record';

describe('PersonalRecord', () => {
  let component: PersonalRecord;
  let fixture: ComponentFixture<PersonalRecord>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalRecord],
    }).compileComponents();

    fixture = TestBed.createComponent(PersonalRecord);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
