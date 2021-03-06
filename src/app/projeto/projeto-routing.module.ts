import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjetoFormPage } from './projeto-form/projeto-form.page';
import { ProjetoPage } from './projeto-list/projeto.page';


const routes: Routes = [
  {
    path: '',
    component: ProjetoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjetoPageRoutingModule {}
