import { Component } from '@angular/core';
import { BlogListComponent } from '../pages/blog-list/blog-list.component';
import { PaginationComponent } from "../shared/components/pagination/pagination.component";

@Component({
  selector: 'app-layout',
  imports: [BlogListComponent, PaginationComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {}
