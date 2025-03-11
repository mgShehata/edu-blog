import { Component, input } from '@angular/core';
import type { Post } from '../../models';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [DatePipe, RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  post = input.required<Post>();
}
