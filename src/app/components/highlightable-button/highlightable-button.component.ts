import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Answer } from 'src/app/models/answer.model';

@Component({
  selector: 'app-highlightable-button',
  templateUrl: './highlightable-button.component.html',
  styleUrls: ['./highlightable-button.component.scss']
})
export class HighlightableButtonComponent {
  @Input() answer!: Answer;
  @Output() changedAnswer: EventEmitter<void> = new EventEmitter<void>();

  clicked() {
    this.changedAnswer.emit();
  }
}
