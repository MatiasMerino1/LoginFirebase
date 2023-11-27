import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateUsuarioPage } from './update-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateUsuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateUsuarioPageRoutingModule {}
