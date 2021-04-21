import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateDatePage } from './create-date.page';

const routes: Routes = [
  {
    path: '',
    component: CreateDatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateDatePageRoutingModule {}
