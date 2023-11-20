import {Component, computed} from '@angular/core';
import {StoreService} from "../../store/store.service";
import {toSignal} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrl: './stars.component.scss'
})
export class StarsComponent {

  repositories  = toSignal(this.storeService.starred$, {
    initialValue: []
  });

  constructor(
      public readonly storeService: StoreService
  ) {}

}
