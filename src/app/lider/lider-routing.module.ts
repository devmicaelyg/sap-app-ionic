import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LiderPage } from './lider.page';

const routes: Routes = [
  {
    path: '',
    component: LiderPage
  },
  // {
  //   path: 'lider-form',
  //   loadChildren: () => import('./lider-form/lider-form/lider-form.module').then( m => m.LiderFormPageModule)
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LiderPageRoutingModule {}
