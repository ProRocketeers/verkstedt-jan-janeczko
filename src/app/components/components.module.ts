import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {CoreModule} from "../core/core.module";
import { RepositoryListComponent } from './repository-list/repository-list.component';
import {MatTableModule} from "@angular/material/table";
import { LayoutComponent } from './layout/layout.component';
import {MatButtonModule} from "@angular/material/button";
import {RouterLink} from "@angular/router";


@NgModule({
  declarations: [
    HeaderComponent,
    RepositoryListComponent,
    LayoutComponent
  ],
    exports: [
        HeaderComponent,
        RepositoryListComponent,
        LayoutComponent
    ],
    imports: [
        CommonModule,
        CoreModule,
        MatToolbarModule,
        MatTableModule,
        MatButtonModule,
        RouterLink
    ]
})
export class ComponentsModule { }
