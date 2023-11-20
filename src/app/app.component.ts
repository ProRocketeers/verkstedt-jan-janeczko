import {Component, OnInit} from '@angular/core';
import {ApiService} from "./api/api.service";
import {StoreService} from "./store/store.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  constructor(
    private readonly apiService: ApiService,
    private readonly storeService: StoreService
  ) {}

  ngOnInit() {
    // state log
    this.storeService.state$.subscribe((state) => console.log('state', state));

    this.loadData();
  }

  loadData() {
    this.storeService.setRepositories({
      isLoading: true,
      hasError: false,
      items: []
    });

    this.apiService.fetchRepositories()
      .subscribe({
        next: (data) => this.storeService.setRepositories({
          isLoading: false,
          hasError: false,
          items: data
        }),
        error: () => this.storeService.setRepositories({
          isLoading: false,
          hasError: true,
          items: []
        })
      });
  }
}
