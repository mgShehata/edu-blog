import type { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'post/:id',
    loadComponent: () =>
      import('./pages/blog-post-detail/blog-post-detail.component').then(
        (m) => m.BlogPostDetailComponent
      ),
  },
];
