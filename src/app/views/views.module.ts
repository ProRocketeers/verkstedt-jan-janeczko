import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { StarsComponent } from './stars/stars.component';
import { ComponentsModule } from '../components/components.module';
import { RouterLink } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [HomeComponent, StarsComponent],
  imports: [CommonModule, ComponentsModule, RouterLink, MatProgressSpinnerModule]
})
export class ViewsModule {}
