import { Component } from '@angular/core';
import { StoreService } from '../../store/store.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public repositories = toSignal(this.storeService.repositories$, {
    initialValue: []
  });

  public isLoading = toSignal(this.storeService.repositoriesLoading$, {
    initialValue: true
  });

  public hasError = toSignal(this.storeService.repositoriesHasError$, {
    initialValue: false
  });

  constructor(public readonly storeService: StoreService) {}
}
