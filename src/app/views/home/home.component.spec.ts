import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import {CommonModule} from "@angular/common";
import {ComponentsModule} from "../../components/components.module";
import {RouterLink} from "@angular/router";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {RouterTestingModule} from "@angular/router/testing";

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [
        RouterTestingModule,
        CommonModule,
        ComponentsModule,
        RouterLink,
        MatProgressSpinnerModule,
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
