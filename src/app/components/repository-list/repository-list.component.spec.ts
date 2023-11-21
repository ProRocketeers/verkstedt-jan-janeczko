import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositoryListComponent } from './repository-list.component';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../core/core.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

describe('RepositoryListComponent', () => {
  let component: RepositoryListComponent;
  let fixture: ComponentFixture<RepositoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RepositoryListComponent],
      imports: [CommonModule, CoreModule, MatToolbarModule, MatTableModule, MatButtonModule, RouterLink]
    }).compileComponents();

    fixture = TestBed.createComponent(RepositoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
