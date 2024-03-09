import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { BuscarClienteComponent } from './buscar-cliente/buscar-cliente.component';
import { PoPageDynamicTableModule, PoTemplatesModule } from '@po-ui/ng-templates';
import { PoDynamicModule, PoModalModule, PoPageModule, PoFieldModule, PoButtonModule, PoTableModule, PoWidgetModule, PoInfoModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';
import { NuevoClienteComponent } from './nuevo-cliente/nuevo-cliente.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


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
    PoButtonModule,
    PoTemplatesModule,
    PoTableModule,
    PoWidgetModule,
    PoInfoModule,
  ],
  exports: [
    BuscarClienteComponent
  ]
})
export class ClientesModule { }
