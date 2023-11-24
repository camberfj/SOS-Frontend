import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarClienteComponent } from './buscar-cliente/buscar-cliente.component';
import { NuevoClienteComponent } from './nuevo/nuevo-cliente.component';

const routes: Routes = [
  {
    path: '',
    component: BuscarClienteComponent,
  },
  {
    path: 'nuevo',
    component: NuevoClienteComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
