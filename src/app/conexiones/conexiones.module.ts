import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConexionesRoutingModule } from './conexiones-routing.module';
import { ConexionesComponent } from './conexiones.component';
import { PoInfoModule, PoTableModule, PoWidgetModule, PoFieldModule, PoModalModule, PoModule, PoDynamicModule, PoPageModule, PoButtonModule } from '@po-ui/ng-components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PoPageDynamicTableModule } from '@po-ui/ng-templates';


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
    PoModule,
    PoPageDynamicTableModule,
    PoDynamicModule,
    PoPageModule,
    PoButtonModule
  ]
})
export class ConexionesModule { }
