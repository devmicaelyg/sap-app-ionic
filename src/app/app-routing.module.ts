import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'lider',
    loadChildren: () => import('./lider/lider.module').then( m => m.LiderPageModule)
  },
  {
    path: 'projeto',
    loadChildren: () => import('./projeto/projeto.module').then( m => m.ProjetoPageModule)
  },
  {
    path: 'ordem-servico',
    loadChildren: () => import('./ordem-servico/ordem-servico.module').then( m => m.OrdemServicoPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
