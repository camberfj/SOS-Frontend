import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NuevoClienteRoutingModule } from './nuevo-cliente-routing.module';
import { NuevoClienteComponent } from './nuevo-cliente.component';


@NgModule({
  declarations: [
    NuevoClienteComponent
  ],
  imports: [
    CommonModule,
    NuevoClienteRoutingModule
  ]
})
export class NuevoClienteModule { }
