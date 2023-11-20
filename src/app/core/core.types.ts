export type Repository = {
  id: number;
  name: string;
  html_url: string;
  description?: string;
  stargazers_count: number
}

export type RepositoriesDTO = {
  items: Repository[];
  total_count: number;
  incomplete_results: boolean;
}

export type RepositoryState = {
  items: Repository[];
  isLoading: boolean;
  hasError: boolean;
}

export type AppState = {
  repositories: RepositoryState;
  starred: Repository[]
}

export type RepositoryWithStars = Repository & {
  isStarred: boolean;
}
