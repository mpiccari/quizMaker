import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionsComponent } from './components/pages/questions/questions.component';
import { ResponsesComponent } from './components/pages/responses/responses.component';

const routes: Routes = [
  { path: 'questions', component: QuestionsComponent },
  { path: 'responses', component: ResponsesComponent },
  { path: '**', redirectTo: 'questions', pathMatch: 'full'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
