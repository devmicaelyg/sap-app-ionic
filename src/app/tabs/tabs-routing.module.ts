import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardPageModule)
      },
      {
        path: 'lider',
        loadChildren: () => import('../lider/lider.module').then(m => m.LiderPageModule)
      },
      {
        path: 'projeto',
        loadChildren: () => import('../projeto/projeto.module').then(m => m.ProjetoPageModule)
      },
      {
        path: 'ordem-servico',
        loadChildren: () => import('../ordem-servico/ordem-servico.module').then(m => m.OrdemServicoPageModule)
      },
      {
        path: 'login',
        loadChildren: () => import('../login/login.module').then(m => m.LoginPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/dashboard',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
