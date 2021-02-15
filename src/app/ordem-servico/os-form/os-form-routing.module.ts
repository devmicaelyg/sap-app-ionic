import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OsFormPage } from './os-form.page';

const routes: Routes = [
  {
    path: '',
    component: OsFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OsFormPageRoutingModule {}
