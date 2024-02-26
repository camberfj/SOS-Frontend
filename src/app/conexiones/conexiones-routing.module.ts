import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConexionesComponent } from './conexiones.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'conexiones'
  },
  {
    path: '',
    component: ConexionesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConexionesRoutingModule { }
