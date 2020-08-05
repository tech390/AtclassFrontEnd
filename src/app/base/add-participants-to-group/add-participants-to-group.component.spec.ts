import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddParticipantsToGroupComponent } from './add-participants-to-group.component';

describe('AddParticipantsToGroupComponent', () => {
  let component: AddParticipantsToGroupComponent;
  let fixture: ComponentFixture<AddParticipantsToGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddParticipantsToGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddParticipantsToGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
