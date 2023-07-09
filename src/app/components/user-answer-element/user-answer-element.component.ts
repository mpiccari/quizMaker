import { Component, Input } from '@angular/core';
import { Answer } from '../../models/answer.model';

@Component({
  selector: 'app-user-answer-element',
  templateUrl: './user-answer-element.component.html',
  styleUrls: ['./user-answer-element.component.scss']
})
export class UserAnswerElementComponent {
  @Input() answer!: Answer;
}
