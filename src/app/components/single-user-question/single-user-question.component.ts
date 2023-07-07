import { Component, Input } from '@angular/core';
import { Answer } from '../../models/answer.model';
import { UserQuestion } from '../../models/user-question.model';

@Component({
  selector: 'app-single-user-question',
  templateUrl: './single-user-question.component.html',
  styleUrls: ['./single-user-question.component.scss']
})
export class SingleUserQuestionComponent {
  @Input() userQuestion!: UserQuestion;

  answerSelected(answer : Answer): void {
    if(answer.isSelected) {
      answer.isSelected = false;
    } else {
      this.userQuestion.answers.forEach(answerOpt => answerOpt.isSelected = false);
      answer.isSelected = true;
    }
  }
}
