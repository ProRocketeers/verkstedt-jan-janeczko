import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewsModule } from './views/views.module';
import { HomeComponent } from './views/home/home.component';
import { StarsComponent } from './views/stars/stars.component';

const routes: Routes = [
  {
    path: 'stars',
    component: StarsComponent
  },
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [ViewsModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
