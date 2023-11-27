import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemPage } from './item.page';

const routes: Routes = [
  {
    path: '',
    component: ItemPage
  },
  {
    path: 'agregar-item',
    loadChildren: () => import('./agregar-item/agregar-item.module').then( m => m.AgregarItemPageModule)
  },
  {
    path: 'detail',
    loadChildren: () => import('./detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'update-item',
    loadChildren: () => import('./update-item/update-item.module').then( m => m.UpdateItemPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemPageRoutingModule {}
