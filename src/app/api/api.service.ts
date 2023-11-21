import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RepositoriesDTO, Repository } from '../core/core.types';
import { map } from 'rxjs/operators';

@Injectable()
export class ApiService {
  constructor(private readonly http: HttpClient) {}

  fetchRepositories(): Observable<Repository[]> {
    const date = new Date();
    date.setDate(date.getDate() - 7);

    const dateString = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    const url = `https://api.github.com/search/repositories?q=created:>${dateString}&sort=stars&order=desc`;

    return this.http.get<RepositoriesDTO>(encodeURI(url)).pipe(map(data => data.items));
  }
}
