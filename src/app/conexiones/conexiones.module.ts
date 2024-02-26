import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConexionesRoutingModule } from './conexiones-routing.module';
import { ConexionesComponent } from './conexiones.component';
import { PoInfoModule, PoTableModule, PoWidgetModule, PoFieldModule, PoModalModule, PoModule } from '@po-ui/ng-components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ConexionesComponent,
  ],
  imports: [
    CommonModule,
    ConexionesRoutingModule,
    PoTableModule,
    PoInfoModule,
    PoWidgetModule,
    PoFieldModule,
    PoModalModule,
    ReactiveFormsModule,
    FormsModule,
    PoModule
  ]
})
export class ConexionesModule { }
