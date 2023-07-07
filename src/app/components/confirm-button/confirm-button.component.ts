import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-confirm-button',
  templateUrl: './confirm-button.component.html',
  styleUrls: ['./confirm-button.component.scss']
})
export class ConfirmButtonComponent {
  @Input() idElement!: string;
  @Input() clickFunction!: () => void;
  @Input() isDisabled: boolean = false;
  @Input() text!: string;
}
