import { computed, inject, Injectable, signal } from '@angular/core';
import { BehaviorSubject, switchMap, tap } from 'rxjs';
import { Post } from '../../shared/models';
import { BlogDataService } from './blog-data.service';

export interface PostState {
  posts: Post[];
  loading: boolean;
  error: any;
}

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private readonly blogDataService = inject(BlogDataService);
  private currentPageSubject = new BehaviorSubject(1);
  currentPage$ = this.currentPageSubject.asObservable();

  // State
  private readonly initialState: PostState = {
    posts: [],
    loading: false,
    error: null,
  };
  private _postsState = signal(this.initialState);

  posts = computed(() => this._postsState()?.posts);
  loading = computed(() => this._postsState()?.loading);
  error = computed(() => this._postsState()?.error);

  constructor() {
    this.currentPage$
      .pipe(
        tap(() => this.setLoading(true)),
        switchMap((page) => this.blogDataService.getPosts(page))
      )
      .subscribe({
        next: (posts) => this.setPosts(posts),
        error: (error) => this.setError(error),
      });
  }

  setPosts(posts: Post[]) {
    this._postsState.set({ posts, loading: false, error: null });
  }

  setLoading(state: boolean) {
    this._postsState.set({ ...this._postsState(), loading: state });
  }

  setError(error: any) {
    this._postsState.set({ ...this._postsState(), error, loading: false });
  }

  setCurrentPage(page: number) {
    this.currentPageSubject.next(page);
  }

  resetCurrentPage() {
    this.currentPageSubject.next(1);
  }

  resetPostsState() {
    this._postsState.set(this.initialState);
  }

  reset() {
    this.resetCurrentPage();
    this.resetPostsState();
  }
}
