import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {CoreModule} from "../core/core.module";

describe('ApiService', () => {
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        HttpClientModule,
        CoreModule
      ],
      providers: [ApiService]
    });
    service = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
