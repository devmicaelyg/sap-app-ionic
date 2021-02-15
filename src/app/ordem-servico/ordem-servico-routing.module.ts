import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdemServicoPage } from './ordem-servico.page';
import { OsFormPage } from './os-form/os-form.page';

const routes: Routes = [
  {
    path: '',
    component: OrdemServicoPage
  },
  {
    path: 'os-novo',
   component: OsFormPage
  },
  {
    path: 'os-form',
    loadChildren: () => import('./os-form/os-form.module').then( m => m.OsFormPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdemServicoPageRoutingModule {}
