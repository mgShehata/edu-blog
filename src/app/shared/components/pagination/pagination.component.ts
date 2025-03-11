import { Component, inject } from '@angular/core';
import { BlogService } from '../../../core/services/blog.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-pagination',
  imports: [],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
})
export class PaginationComponent {
  private blogService = inject(BlogService);

  currentPage = toSignal(this.blogService.currentPage$, { initialValue: 1 });

  goToNextPage() {
    // Handle no next page
    this.blogService.setCurrentPage(this.currentPage() + 1);
  }
}
