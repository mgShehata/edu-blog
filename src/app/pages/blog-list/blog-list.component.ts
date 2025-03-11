import { Component, inject } from '@angular/core';
import { BlogService } from '../../core/services/blog.service';

@Component({
  selector: 'app-blog-list',
  imports: [],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.scss',
})
export class BlogListComponent {
  private blogService = inject(BlogService);
}
