import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAnswerElementComponent } from './user-answer-element.component';

describe('UserAnswerElementComponent', () => {
  let component: UserAnswerElementComponent;
  let fixture: ComponentFixture<UserAnswerElementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserAnswerElementComponent]
    });
    fixture = TestBed.createComponent(UserAnswerElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
