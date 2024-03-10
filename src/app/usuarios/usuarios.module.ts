import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosComponent } from './usuarios.component';
import { PoFieldModule, PoInfoModule, PoModalModule, PoModule, PoPageModule, PoTableModule, PoWidgetModule } from '@po-ui/ng-components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PoPageDynamicTableModule } from '@po-ui/ng-templates';


@NgModule({
  declarations: [
    UsuariosComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    PoModalModule,
    PoTableModule,
    PoInfoModule,
    PoWidgetModule,
    PoFieldModule,
    ReactiveFormsModule,
    FormsModule,
    PoModule,
    PoPageModule,
    PoPageDynamicTableModule,
    PoPageModule,
  ]
})
export class UsuariosModule { }
