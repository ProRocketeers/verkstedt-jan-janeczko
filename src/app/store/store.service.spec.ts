import { TestBed } from '@angular/core/testing';
import { StoreService } from './store.service';
import { take } from 'rxjs/operators';

describe('StoreService', () => {
  let storeService: StoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StoreService]
    });
    storeService = TestBed.inject(StoreService);
  });

  it('should be created', () => {
    expect(storeService).toBeTruthy();
  });

  it('should set repositories', () => {
    const testData = {
      repositories: {
        items: [
          {
            id: 1,
            name: 'Repo 1',
            html_url: 'http://repo1.com',
            stargazers_count: 10
          }
        ],
        isLoading: false,
        hasError: false
      }
    };

    storeService.setRepositories(testData.repositories);

    storeService.state$.pipe(take(1)).subscribe(state => {
      expect(state.repositories).toEqual(testData.repositories);
    });
  });

  it('should add repository to starred', () => {
    const testData = {
      id: 1,
      name: 'Repo 1',
      html_url: 'http://repo1.com',
      stargazers_count: 10
    };

    storeService.addToStarred(testData);

    storeService.state$.pipe(take(1)).subscribe(state => {
      expect(state.starred).toContain(testData);
    });
  });

  it('should not add already starred repository to starred', () => {
    const testData = {
      id: 1,
      name: 'Repo 1',
      html_url: 'http://repo1.com',
      stargazers_count: 10
    };

    storeService.addToStarred(testData);
    storeService.addToStarred(testData);

    storeService.state$.pipe(take(1)).subscribe(state => {
      expect(state.starred).toEqual([testData]);
    });
  });

  it('should remove repository from starred', () => {
    const testData = {
      id: 1,
      name: 'Repo 1',
      html_url: 'http://repo1.com',
      stargazers_count: 10
    };

    storeService.addToStarred(testData);
    storeService.removeFromStarred(testData);

    storeService.state$.pipe(take(1)).subscribe(state => {
      expect(state.starred).not.toContain(testData);
    });
  });

  it('should provide repositories$ observable with isStarred property', () => {
    const testData = {
      repositories: {
        items: [
          {
            id: 1,
            name: 'Repo 1',
            html_url: 'http://repo1.com',
            stargazers_count: 10
          }
        ],
        isLoading: false,
        hasError: false
      },
      starred: [
        {
          id: 1,
          name: 'Repo 1',
          html_url: 'http://repo1.com',
          stargazers_count: 10
        }
      ]
    };

    storeService.setRepositories(testData.repositories);
    storeService.setStarred(testData.starred);

    storeService.repositories$.pipe(take(1)).subscribe(repositories => {
      expect(repositories.length).toBe(1);
      expect(repositories[0].isStarred).toBe(true);
    });
  });
});
