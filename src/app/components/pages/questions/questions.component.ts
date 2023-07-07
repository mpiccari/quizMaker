import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { KeyDescription } from 'src/app/models/key-description.model';
import { ListCategoriesResponse } from 'src/app/models/list-categories-response.model';
import { QuestionsService } from 'src/app/services/questions.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Question } from 'src/app/models/question.model';

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
