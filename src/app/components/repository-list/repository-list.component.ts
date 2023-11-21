import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Repository, RepositoryWithStars } from '../../core/core.types';

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
  addToStars = new EventEmitter<Repository>();

  @Output()
  removeFromStars = new EventEmitter<Repository>();

  onButtonClick(repository: RepositoryWithStars) {
    const emitter = repository.isStarred ? this.removeFromStars : this.addToStars;
    emitter.emit(repository);
  }

  trackByRepositoryId(index: number, item: RepositoryWithStars): number {
    return item.id;
  }
}
