import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { redirectUnauthorizedTo, redirectLoggedInTo, canActivate,} from '@angular/fire/auth-guard';

const redirectUnauthorizedToToRegister = () => redirectUnauthorizedTo(['registro']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['home']);

const routes: Routes = [

  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then(m => m.RegistroPageModule),
  },
  {
    path: '',
    redirectTo: 'registro',
    pathMatch: 'full'
  },

  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    ...canActivate(redirectLoggedInToHome)
  },
  {
    path: 'item',
    children : [
      {
      path: '',
      loadChildren: () => import('./item/item.module').then( m => m.ItemPageModule),
    ...canActivate(redirectUnauthorizedToToRegister)
      },
      {
        path : 'agregar',
        loadChildren: () => import('./item/agregar-item/agregar-item.module').then( m => m.AgregarItemPageModule),
        ...canActivate(redirectUnauthorizedToToRegister)
      },
      {
        path : 'detail/:itemId',
        loadChildren:() => import('./item/detail/detail.module').then(m=> m.DetailPageModule),
        ...canActivate(redirectUnauthorizedToToRegister)
      },
      {
        path : 'update',
        loadChildren:() => import('./item/update-item/update-item.module').then(m=> m.UpdateItemPageModule),
        ...canActivate(redirectUnauthorizedToToRegister)
      },

  ]
  },
  {
    path: 'perfil-usuario',
    loadChildren: () => import('./perfil-usuario/perfil-usuario.module').then( m => m.PerfilUsuarioPageModule),
    ...canActivate(redirectUnauthorizedToToRegister)
  },
  {
    path: 'update-usuario',
    loadChildren: () => import('./perfil-usuario/update-usuario/update-usuario.module').then( m => m.UpdateUsuarioPageModule),
    ...canActivate(redirectUnauthorizedToToRegister)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
