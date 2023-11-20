import {Component, computed} from '@angular/core';
import {StoreService} from "../../store/store.service";
import {toSignal} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  repositories = toSignal(this.storeService.repositories$, {
    initialValue: []
  });

  isLoading = toSignal(this.storeService.repositoriesLoading$, {
    initialValue: true
  });

  hasError = toSignal(this.storeService.repositoriesHasError$, {
    initialValue: false
  });

  constructor(
    public readonly storeService: StoreService
  ) {}
}
