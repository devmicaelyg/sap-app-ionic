import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LiderFormPage } from './lider-form.page';

const routes: Routes = [
  {
    path: '',
    component: LiderFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LiderFormPageRoutingModule {}
