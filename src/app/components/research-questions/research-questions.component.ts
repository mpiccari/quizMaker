import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/models/category.model';
import { KeyDescription } from 'src/app/models/key-description.model';
import { ListCategoriesResponse } from 'src/app/models/list-categories-response.model';
import { QuestionListResponse } from 'src/app/models/question-list-response.model';
import { Question } from 'src/app/models/question.model';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-research-questions',
  templateUrl: './research-questions.component.html',
  styleUrls: ['./research-questions.component.scss']
})
export class ResearchQuestionsComponent implements OnInit {

  @Output()
  questionList: EventEmitter<Question[]> = new EventEmitter<Question[]>();

  optionsCategory: KeyDescription[] = [];
  messageNetworkError: string = '';
  networkError: boolean = false;

  fgSearchQuestions: FormGroup = new FormGroup({
    "category": new FormControl('', Validators.required),
    "difficulty": new FormControl('', Validators.required)
  });

  optionsDifficulty: KeyDescription[] = [
    {key: "easy", description: "Easy"},
    {key: "medium", description: "Medium"},
    {key: "hard", description: "Hard"}
  ]

  constructor(private service: QuestionsService) {}

  ngOnInit(): void {
    this.service.getQuestionCategories().subscribe({
      next: (listCategoriesResponse: ListCategoriesResponse) => {
        this.optionsCategory = listCategoriesResponse.trivia_categories.map(
          (category: Category) => ({description: category.name, key: category.id})
        );
        this.networkError = false;
      }, error: () => {
        this.messageNetworkError = "Error retrieving question categories";
        this.networkError = true;
      }
    });
  }

  getCategoryFc(): FormControl {
    return this.getFC("category");
  }

  getDifficultyFc(): FormControl {
    return this.getFC("difficulty");
  }

  getFC(key: string): FormControl {
    return <FormControl> this.fgSearchQuestions.get(key);
  }

  getActionButton(): () => void {
    return () => {
      this.service.getListQuestions(+this.getCategoryFc().value,
      this.getDifficultyFc().value).subscribe({
        next: (response: QuestionListResponse) => {
          this.networkError = false;
          this.questionList.emit(response.results);
        }, error: () => {
          this.messageNetworkError = "Error retrieving the question list";
          this.networkError = true;
        }
      });
    }
  }
}
