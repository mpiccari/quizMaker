import { Component, Input } from '@angular/core';
import { UserQuestion } from 'src/app/models/user-question.model';

@Component({
  selector: 'app-single-user-answer',
  templateUrl: './single-user-answer.component.html',
  styleUrls: ['./single-user-answer.component.scss']
})
export class SingleUserAnswerComponent {
  @Input() userQuestion!: UserQuestion;
}
