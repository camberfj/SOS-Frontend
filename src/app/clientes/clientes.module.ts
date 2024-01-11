import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { BuscarClienteComponent } from './buscar-cliente/buscar-cliente.component';
import { PoPageDynamicTableModule } from '@po-ui/ng-templates';
import { PoDynamicModule, PoModalModule, PoPageModule, PoFieldModule, PoButtonModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';
import { NuevoClienteComponent } from './nuevo-cliente/nuevo-cliente.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



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
    PoFieldModule,
    PoButtonModule
  ],
  exports: [
    NuevoClienteComponent
  ]
})
export class ClientesModule { }
