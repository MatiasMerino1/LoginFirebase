import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { redirectUnauthorizedTo, redirectLoggedInTo, canActivate,} from '@angular/fire/auth-guard';

const redirectUnauthorizedToToRegister = () => redirectUnauthorizedTo(['registro']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['registro']);

const routes: Routes = [

  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    ...canActivate(redirectUnauthorizedToToRegister)
  },
  {
    path: '',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule),
    ...canActivate(redirectLoggedInToHome)
  },
  {
    path: '',
    redirectTo: 'registro',
    pathMatch: 'full'
  },

  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule),
  },
  {
    path: 'agregar-item',
    loadChildren: () => import('./agregar-item/agregar-item.module').then( m => m.AgregarItemPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
