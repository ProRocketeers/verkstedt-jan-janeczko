import { TestBed } from '@angular/core/testing';

import { StoreService } from './store.service';
import {CommonModule} from "@angular/common";
import {CoreModule} from "../core/core.module";
import {ApiModule} from "../api/api.module";

describe('StoreService', () => {
  let service: StoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        CoreModule,
        ApiModule
      ]
    });
    service = TestBed.inject(StoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
