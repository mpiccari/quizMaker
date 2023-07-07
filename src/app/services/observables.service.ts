import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserQuestion } from '../models/user-question.model';

@Injectable({
  providedIn: 'root'
})
export class ObservablesService {
  private subjectQuestionnaire: BehaviorSubject<UserQuestion[]> = new BehaviorSubject<UserQuestion[]>([]);

  constructor() {}

  getSubjectQuestionnaire(): Observable<UserQuestion[]> {
    return this.subjectQuestionnaire.asObservable();
  }

  setSubjectQuestionnaire(questionnaire: UserQuestion[]): void {
    this.subjectQuestionnaire.next(questionnaire);
  }
}
