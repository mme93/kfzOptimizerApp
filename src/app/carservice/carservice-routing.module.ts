import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarservicePage } from './carservice.page';

const routes: Routes = [
  {
    path: '',
    component: CarservicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarservicePageRoutingModule {}
