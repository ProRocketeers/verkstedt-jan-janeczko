import { Injectable } from '@angular/core';
import {ApiService} from "../api/api.service";
import {BehaviorSubject, distinctUntilChanged, Observable} from "rxjs";
import {AppState, RepositoryState, Repository} from "../core/core.types";
import {map} from "rxjs/operators";

const LS_STARRED_KEY = 'starred_repositories'

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  stateSubject: BehaviorSubject<AppState> = new BehaviorSubject<AppState>({
    repositories: {
      items: [],
      hasError: false,
      isLoading: true
    },
    starred: []
  });

  constructor() {
      const cachedStarred = localStorage.getItem(LS_STARRED_KEY)

      if (cachedStarred) {
        const starred: Repository[] = JSON.parse(cachedStarred);
        this.setStarred(starred);
      }
  }

  get state$(): Observable<AppState> {
    return this.stateSubject.asObservable().pipe(
      distinctUntilChanged()
    );
  }

  setRepositories(data: Partial<RepositoryState>) {
    const state = this.stateSubject.value;

    this.stateSubject.next({
      ...state,
      repositories: {
        ...state.repositories,
        ...data
      }
    });
  }

  get repositories$(): Observable<RepositoryState> {
    return this.state$.pipe(
      map((data) => data.repositories)
    );
  }

  setStarred(repositories: Repository[]) {
    const state = this.stateSubject.value;

    this.stateSubject.next({
        ...state,
        starred: repositories
    });
  }

  addToStarred(repository: Repository) {
    const state = this.stateSubject.value;
    const starred = state.starred;

    if (!starred.find((item) => item.id === repository.id)) {
        const nextStarred = [ ...state.starred, repository ];

        this.stateSubject.next({
          ...state,
          starred: nextStarred
        });

        localStorage.setItem(LS_STARRED_KEY, JSON.stringify(nextStarred));
    }
  }

  removeFromStarred(repository: Repository) {
      const state = this.stateSubject.value;
      const starred = state.starred;

      if (starred.find((item) => item.id === repository.id)) {
          const nextStarred = state.starred.filter((item) => item.id !== repository.id);

          this.stateSubject.next({
              ...state,
              starred: nextStarred
          });

          localStorage.setItem(LS_STARRED_KEY, JSON.stringify(nextStarred));
      }
  }

  get starred$(): Observable<Repository[]> {
        return this.state$.pipe(
            map((data) => data.starred)
        );
  }
}
