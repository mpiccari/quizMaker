import { Component } from '@angular/core';
import { Question } from '../../../models/question.model';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent {
  questionList: Question[] = [];
  getQuestionList(questionList: Question[]) {
    this.questionList = questionList;
  }
}
