import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserQuestion } from '../../../models/user-question.model';
import { ObservablesService } from '../../../services/observables.service';

@Component({
  selector: 'app-responses',
  templateUrl: './responses.component.html',
  styleUrls: ['./responses.component.scss']
})
export class ResponsesComponent implements OnInit, OnDestroy {
  subscriptionQuestionnaire!: Subscription;
  questionnaire: UserQuestion[] = [];
  constructor(private observablesService: ObservablesService, private router: Router) {}

  ngOnInit(): void {
    this.subscriptionQuestionnaire = this.observablesService.getSubjectQuestionnaire()
      .subscribe(savedQuestionnaire => {
          this.questionnaire = savedQuestionnaire;
          if(!this.questionnaire?.length) {
            this.router.navigate(['/questions']);
          }
        }
      )
  }

  ngOnDestroy(): void {
      this.subscriptionQuestionnaire.unsubscribe();
  }

}
