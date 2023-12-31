import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarClienteComponent } from './buscar-cliente/buscar-cliente.component';
import { NuevoClienteComponent } from './nuevo-cliente/nuevo-cliente.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'clientes'
  },
  {
    path: '',
    component: BuscarClienteComponent,
  },
  {
    path: '',
    component: NuevoClienteComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
