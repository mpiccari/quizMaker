import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { KeyDescription } from 'src/app/models/key-description.model';

@Component({
  selector: 'app-quiz-dropdown',
  templateUrl: './quiz-dropdown.component.html',
  styleUrls: ['./quiz-dropdown.component.scss']
})
export class QuizDropdownComponent {
  @Input() idElement!: string;
  @Input() placeholder: string = "Choose an option";
  @Input() options!: KeyDescription[];
  @Input() fc!: FormControl;
  @Input() labelDesc!: string;
}
