import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { ApiModule } from '../api/api.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, CoreModule, ApiModule]
})
export class StoreModule {}
