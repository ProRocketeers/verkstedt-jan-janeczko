import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";
import {RepositoriesDTO, Repository} from "../core/core.types";
import {map} from 'rxjs/operators'

@Injectable()
export class ApiService {

  constructor(
    private readonly http: HttpClient
  ) {}

  fetchRepositories(): Observable<Repository[]> {
    // TODO datum na zacatek tydne
    return this.http.get<RepositoriesDTO>('https://api.github.com/search/repositories?q=created:>2017-01-10&sort=stars&order=desc')
      .pipe(map((data) => data.items))
  }
}
