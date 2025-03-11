import { Component, input } from '@angular/core';

@Component({
  selector: 'app-ui-error',
  imports: [],
  templateUrl: './ui-error.component.html',
  styleUrl: './ui-error.component.scss',
})
export class UiErrorComponent {
  error = input('Something went wrong, please try again later');
}
