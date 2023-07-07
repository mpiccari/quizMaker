import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleUserAnswerComponent } from './single-user-answer.component';

describe('SingleUserAnswerComponent', () => {
  let component: SingleUserAnswerComponent;
  let fixture: ComponentFixture<SingleUserAnswerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleUserAnswerComponent]
    });
    fixture = TestBed.createComponent(SingleUserAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
