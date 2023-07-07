import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightableButtonComponent } from './highlightable-button.component';

describe('HighlightableButtonComponent', () => {
  let component: HighlightableButtonComponent;
  let fixture: ComponentFixture<HighlightableButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HighlightableButtonComponent]
    });
    fixture = TestBed.createComponent(HighlightableButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
