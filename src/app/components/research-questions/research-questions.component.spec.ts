import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchQuestionsComponent } from './research-questions.component';

describe('ResearchQuestionsComponent', () => {
  let component: ResearchQuestionsComponent;
  let fixture: ComponentFixture<ResearchQuestionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResearchQuestionsComponent]
    });
    fixture = TestBed.createComponent(ResearchQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
