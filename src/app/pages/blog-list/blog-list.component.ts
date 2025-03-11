import { Component, inject } from '@angular/core';
import { BlogService } from '../../core/services/blog.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { CardComponent } from '../../shared/components/card/card.component';
import { UiErrorComponent } from '../../shared/components/ui-error/ui-error.component';
import { LoaderComponent } from '../../shared/components/loader/loader.component';

@Component({
  selector: 'app-blog-list',
  imports: [CardComponent, UiErrorComponent, LoaderComponent],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.scss',
})
export class BlogListComponent {
  private blogService = inject(BlogService);

  posts = this.blogService.posts;
  loading = this.blogService.loading;
  error = this.blogService.error;
}
