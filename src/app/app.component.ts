import { Component, OnInit } from '@angular/core';
import { ObservablesService } from './services/observables.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Quiz Maker';
  showSpinner: boolean = false;
  subscriptionSpinner!: Subscription;
  constructor(private observablesService: ObservablesService) {}

  ngOnInit(): void {
    this.subscriptionSpinner = this.observablesService.getObservableSpinner()
      .subscribe(spinnerValue => this.showSpinner = spinnerValue);
  }
}
