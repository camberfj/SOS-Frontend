import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'auth'
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(module => module.AuthModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((module) => module.HomeModule)
  },
  {
    path: 'clientes',
    loadChildren: () => import('./clientes/clientes.module').then((module) => module.ClientesModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
