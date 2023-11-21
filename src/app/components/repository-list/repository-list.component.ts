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
  public repositories: RepositoryWithStars[] = [];

  @Output()
  public addToStars = new EventEmitter<Repository>();

  @Output()
  public removeFromStars = new EventEmitter<Repository>();

  public onButtonClick(repository: RepositoryWithStars) {
    const emitter = repository.isStarred ? this.removeFromStars : this.addToStars;
    emitter.emit(repository);
  }

  public trackByRepositoryId(index: number, item: RepositoryWithStars): number {
    return item.id;
  }
}
