import {Component, computed} from '@angular/core';
import {StoreService} from "../../store/store.service";
import {toSignal} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  state  = toSignal(this.storeService.repositories$);

  repositories = computed(() => {
    const data = this.state()
    return !data ? [] : data.items
  });

  isLoading = computed(() => {
    const data = this.state()
    return !data ? false : data.isLoading
  });

  hasError = computed(() => {
    const data = this.state()
    return !data ? true : data.hasError
  });

  constructor(
    public readonly storeService: StoreService
  ) {}
}
