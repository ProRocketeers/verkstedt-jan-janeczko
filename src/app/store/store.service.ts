import { Injectable } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged, Observable, from } from 'rxjs';
import { AppState, RepositoryState, Repository, RepositoryWithStars } from '../core/core.types';
import { map, mergeMap, toArray } from 'rxjs/operators';

const LS_STARRED_KEY = 'starred_repositories';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  public static getInitState = (): AppState => ({
    repositories: {
      items: [],
      hasError: false,
      isLoading: true
    },
    starred: []
  });

  private readonly stateSubject: BehaviorSubject<AppState> = new BehaviorSubject<AppState>(StoreService.getInitState());

  constructor() {
    const cachedStarred = localStorage.getItem(LS_STARRED_KEY);

    if (cachedStarred) {
      const starred: Repository[] = JSON.parse(cachedStarred);
      this.setStarred(starred);
    }
  }

  public get state$(): Observable<AppState> {
    return this.stateSubject.asObservable().pipe(distinctUntilChanged());
  }

  public setRepositories(data: Partial<RepositoryState>) {
    const state = this.stateSubject.value;

    this.stateSubject.next({
      ...state,
      repositories: {
        ...state.repositories,
        ...data
      }
    });
  }

  public get repositories$(): Observable<RepositoryWithStars[]> {
    return this.state$.pipe(
      map(data => ({
        repositories: data.repositories.items,
        starredMap: new Map<number, Repository>(data.starred.map(repository => [repository.id, repository]))
      })),
      mergeMap(({ repositories, starredMap }) =>
        from(repositories).pipe(
          map(repository => ({
            ...repository,
            isStarred: !!starredMap.get(repository.id)
          })),
          toArray()
        )
      )
    );
  }

  public get repositoriesLoading$(): Observable<boolean> {
    return this.state$.pipe(map(data => data.repositories.isLoading));
  }

  public get repositoriesHasError$(): Observable<boolean> {
    return this.state$.pipe(map(data => data.repositories.hasError));
  }

  public setStarred(repositories: Repository[]) {
    const state = this.stateSubject.value;

    this.stateSubject.next({
      ...state,
      starred: repositories
    });
  }

  public addToStarred(repository: Repository) {
    const state = this.stateSubject.value;
    const starred = state.starred;

    if (!starred.find(item => item.id === repository.id)) {
      const nextStarred = [...state.starred, repository];

      this.stateSubject.next({
        ...state,
        starred: nextStarred
      });

      localStorage.setItem(LS_STARRED_KEY, JSON.stringify(nextStarred));
    }
  }

  public removeFromStarred(repository: Repository) {
    const state = this.stateSubject.value;
    const starred = state.starred;

    if (starred.find(item => item.id === repository.id)) {
      const nextStarred = state.starred.filter(item => item.id !== repository.id);

      this.stateSubject.next({
        ...state,
        starred: nextStarred
      });

      localStorage.setItem(LS_STARRED_KEY, JSON.stringify(nextStarred));
    }
  }

  public get starred$(): Observable<RepositoryWithStars[]> {
    return this.state$.pipe(
      map(data => data.starred),
      mergeMap(repositories =>
        from(repositories).pipe(
          map(repository => ({
            ...repository,
            isStarred: true
          })),
          toArray()
        )
      )
    );
  }
}
