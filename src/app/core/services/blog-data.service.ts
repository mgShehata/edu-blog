import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { Post } from '../../shared/models';

@Injectable({
  providedIn: 'root',
})
export class BlogDataService {
  private readonly http = inject(HttpClient);
  private readonly API_URL = environment.apiUrl;

  getPosts(page: number = 1, perPage: number = 10): Observable<Post[]> {
    return this.http
      .get<Post[]>(this.API_URL, {
        params: {
          page: page.toString(),
          per_page: perPage.toString(),
        },
        headers: { Accept: 'application/json' },
      })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          const errorMessage = error.error?.message || 'Failed to load posts';
          return throwError(() => errorMessage);
        })
      );
  }
}
