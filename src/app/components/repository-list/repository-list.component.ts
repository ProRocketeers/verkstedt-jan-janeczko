import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Repository, RepositoryWithStars} from "../../core/core.types";

@Component({
  selector: 'app-repository-list',
  templateUrl: './repository-list.component.html',
  styleUrl: './repository-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RepositoryListComponent {

  @Input()
  repositories: RepositoryWithStars[] = [];

  @Output()
  onAddToStars = new EventEmitter<Repository>();

  @Output()
  onRemoveFromStars = new EventEmitter<Repository>();

  displayedColumns = ['id', 'name', 'html_url', 'description', 'stargazers_count', 'actions'];

  onButtonClick(repository: RepositoryWithStars) {
    const emitter = repository.isStarred ? this.onRemoveFromStars : this.onAddToStars;
    emitter.emit(repository);
  }

}
