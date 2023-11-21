import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarsComponent } from './stars.component';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../../components/components.module';
import { RouterLink } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterTestingModule } from '@angular/router/testing';

describe('StarsComponent', () => {
  let component: StarsComponent;
  let fixture: ComponentFixture<StarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StarsComponent],
      imports: [RouterTestingModule, CommonModule, ComponentsModule, RouterLink, MatProgressSpinnerModule]
    }).compileComponents();

    fixture = TestBed.createComponent(StarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
