import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Answer } from '../../models/answer.model';
import { Question } from '../../models/question.model';
import { UserQuestion } from '../../models/user-question.model';
import { ObservablesService } from '../../services/observables.service';

@Component({
  selector: 'app-manage-questions',
  templateUrl: './manage-questions.component.html',
  styleUrls: ['./manage-questions.component.scss']
})
export class ManageQuestionsComponent {

  @Input() set list(listValue: Question[]) {
    this.createQuestionnaire(listValue);
  }

  questionnaire: UserQuestion[] = [];

  constructor(private router: Router, private observablesService: ObservablesService) {}

  createQuestionnaire(listValue: Question[]): void {
    this.questionnaire.splice(0, this.questionnaire.length);
    listValue.forEach((question: Question) => {
      let answersArray: Answer[] = [];
      this.addAnswer(answersArray, question.correct_answer, true);
      question.incorrect_answers.forEach((incorrectAnswer: string) => {
        this.addAnswer(answersArray, incorrectAnswer, false);
      })
      answersArray.sort((a, b) => b.id - a.id);
      this.questionnaire.push({text: question.question, answers: answersArray});
    });
  }

  addAnswer(array: Answer[], textAnswer: string, isCorrectAnswer: boolean): void {
    array.push({
      isCorrect: isCorrectAnswer,
      id: Math.random(),
      isSelected: false,
      text: textAnswer
    });
  }

  isQuestionnaireComplete(): boolean {
    return this.questionnaire.find(question => !this.hasAnswerSelected(question.answers)) ? false : true;
  }

  hasAnswerSelected(answers: Answer[]): boolean {
    return answers.find(answer => answer.isSelected) ? true : false;
  }

  submitted(): () => void {
    return () => {
      this.observablesService.setSubjectQuestionnaire(this.questionnaire);
      this.router.navigate(['/responses']);
    }
  }
}
