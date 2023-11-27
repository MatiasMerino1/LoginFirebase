import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilUsuarioPage } from './perfil-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilUsuarioPage
  },
  {
    path: 'update-usuario',
    loadChildren: () => import('./update-usuario/update-usuario.module').then( m => m.UpdateUsuarioPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilUsuarioPageRoutingModule {}
