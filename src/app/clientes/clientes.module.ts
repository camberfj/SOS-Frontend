import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { NuevoClienteComponent } from './nuevo/nuevo-cliente.component';
import { BuscarClienteComponent } from './buscar-cliente/buscar-cliente.component';
import { PoPageDynamicTableModule } from '@po-ui/ng-templates';
import { PoDynamicModule, PoModalModule } from '@po-ui/ng-components';



@NgModule({
  declarations: [
    NuevoClienteComponent,
    BuscarClienteComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    PoPageDynamicTableModule,
    PoModalModule,
    PoDynamicModule
  ]
})
export class ClientesModule { }
