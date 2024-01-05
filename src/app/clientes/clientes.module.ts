import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { BuscarClienteComponent } from './buscar-cliente/buscar-cliente.component';
import { PoPageDynamicTableModule } from '@po-ui/ng-templates';
import { PoDynamicModule, PoModalModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';
import { NuevoClienteComponent } from './nuevo-cliente/nuevo-cliente.component';



@NgModule({
  declarations: [
    BuscarClienteComponent,
    NuevoClienteComponent,
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    PoPageDynamicTableModule,
    PoModalModule,
    PoDynamicModule,
    RouterModule,
    PoModalModule
  ],
  exports: [
    NuevoClienteComponent
  ]
})
export class ClientesModule { }
