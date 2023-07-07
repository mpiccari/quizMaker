import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListCategoriesResponse } from '../models/list-categories-response.model';
import { QuestionListResponse } from '../models/question-list-response.model';
@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private client: HttpClient) {}

  getQuestionCategories(): Observable<ListCategoriesResponse> {
    return this.client.get<ListCategoriesResponse>("https://opentdb.com/api_category.php");
  }

  getListQuestions(idCategory: number, difficulty: string): Observable<QuestionListResponse> {
    let queryParams: HttpParams = new HttpParams();
    queryParams = queryParams.append("amount", 5).append("category", idCategory)
      .append("difficulty", difficulty).append("type", "multiple");
    return this.client.get<QuestionListResponse>(
      "https://opentdb.com/api.php", {params: queryParams});
  }
}
