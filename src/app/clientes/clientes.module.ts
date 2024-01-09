import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { BuscarClienteComponent } from './buscar-cliente/buscar-cliente.component';
import { PoPageDynamicTableModule } from '@po-ui/ng-templates';
import { PoDynamicModule, PoModalModule, PoPageModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';
import { NuevoClienteComponent } from './nuevo-cliente/nuevo-cliente.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PoFieldModule } from '@po-ui/ng-components';



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
    PoModalModule,
    FormsModule,
    PoPageModule,
    ReactiveFormsModule,
    PoFieldModule
  ],
  exports: [
    NuevoClienteComponent
  ]
})
export class ClientesModule { }
