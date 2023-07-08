import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { UserQuestion } from '../models/user-question.model';

@Injectable({
  providedIn: 'root'
})
export class ObservablesService {
  private subjectQuestionnaire: BehaviorSubject<UserQuestion[]> = new BehaviorSubject<UserQuestion[]>([]);
  private subjectSpinner: Subject<boolean> = new Subject<boolean>();

  constructor() {}

  getObservableQuestionnaire(): Observable<UserQuestion[]> {
    return this.subjectQuestionnaire.asObservable();
  }

  setSubjectQuestionnaire(questionnaire: UserQuestion[]): void {
    this.subjectQuestionnaire.next(questionnaire);
  }

  getObservableSpinner(): Observable<boolean> {
    return this.subjectSpinner.asObservable();
  }

  setSubjectSpinner(showSpinner: boolean): void {
    this.subjectSpinner.next(showSpinner);
  }
}
