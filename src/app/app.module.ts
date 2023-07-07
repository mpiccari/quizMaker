import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionsComponent } from './components/pages/questions/questions.component';
import { ResponsesComponent } from './components/pages/responses/responses.component';
import { HttpClientModule } from '@angular/common/http';
import { QuizDropdownComponent } from './components/quiz-dropdown/quiz-dropdown.component';
import { ResearchQuestionsComponent } from './components/research-questions/research-questions.component';
import { ConfirmButtonComponent } from './components/confirm-button/confirm-button.component';
import { ManageQuestionsComponent } from './components/manage-questions/manage-questions.component';
import { SingleUserQuestionComponent } from './components/single-user-question/single-user-question.component';
import { HighlightableButtonComponent } from './components/highlightable-button/highlightable-button.component';
@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    ResponsesComponent,
    QuizDropdownComponent,
    ResearchQuestionsComponent,
    ConfirmButtonComponent,
    ManageQuestionsComponent,
    SingleUserQuestionComponent,
    HighlightableButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
