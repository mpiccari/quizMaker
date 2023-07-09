import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from '../../models/category.model';
import { KeyDescription } from '../../models/key-description.model';
import { ListCategoriesResponse } from '../../models/list-categories-response.model';
import { QuestionListResponse } from '../../models/question-list-response.model';
import { Question } from '../../models/question.model';
import { QuestionsService } from '../../services/questions.service';
import { ObservablesService } from '../../services/observables.service';

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

  constructor(private service: QuestionsService,
    private observablesService: ObservablesService) {}

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

  getQuestionnaire(): () => void {
    return () => {
      this.observablesService.setSubjectSpinner(true);
      this.service.getListQuestions(+this.getCategoryFc().value,
      this.getDifficultyFc().value).subscribe({
        next: (response: QuestionListResponse) => {
          this.observablesService.setSubjectSpinner(false);
          this.networkError = false;
          this.questionList.emit(response.results);
        }, error: () => {
          this.observablesService.setSubjectSpinner(false);
          this.messageNetworkError = "Error retrieving the question list";
          this.networkError = true;
        }
      });
    }
  }
}
