import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from  '@angular/common/http';
import { ApiService } from "./api.service";
import {CoreModule} from "../core/core.module";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    CoreModule
  ],
  providers: [ApiService]
})
export class ApiModule {}
