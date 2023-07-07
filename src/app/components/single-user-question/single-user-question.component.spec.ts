import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleUserQuestionComponent } from './single-user-question.component';

describe('SingleUserQuestionComponent', () => {
  let component: SingleUserQuestionComponent;
  let fixture: ComponentFixture<SingleUserQuestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleUserQuestionComponent]
    });
    fixture = TestBed.createComponent(SingleUserQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
