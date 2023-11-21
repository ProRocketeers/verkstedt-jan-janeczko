import { TestBed } from '@angular/core/testing';
import { ApiService } from './api.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CoreModule } from '../core/core.module';
import { RepositoriesDTO, Repository } from '../core/core.types';

describe('ApiService', () => {
  let service: ApiService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, CoreModule],
      providers: [ApiService]
    });

    service = TestBed.inject(ApiService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch repositories', () => {
    const mockRepositories: RepositoriesDTO = {
      items: [
        {
          id: 1,
          name: 'Repository 1',
          html_url: 'http://repo1.com',
          stargazers_count: 10
        },
        {
          id: 2,
          name: 'Repository 2',
          html_url: 'http://repo2.com',
          stargazers_count: 20
        }
      ],
      total_count: 2,
      incomplete_results: false
    };

    service.fetchRepositories().subscribe((repositories: Repository[]) => {
      expect(repositories.length).toBe(2);
      expect(repositories[0].name).toBe('Repository 1');
      expect(repositories[1].name).toBe('Repository 2');
    });

    const req = httpTestingController.expectOne('https://api.github.com/search/repositories?q=created:%3E2023-11-13&sort=stars&order=desc');

    expect(req.request.method).toBe('GET');

    req.flush(mockRepositories);
  });
});
