import { Component, input } from '@angular/core';
import type { Post } from '../../models';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [DatePipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  post = input.required<Post>();
}
