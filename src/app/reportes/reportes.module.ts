import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportesRoutingModule } from './reportes-routing.module';
import { ReportesComponent } from './reportes.component';
import { PoFieldModule, PoInfoModule, PoModalModule, PoModule, PoPageModule, PoTableModule, PoWidgetModule } from '@po-ui/ng-components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PoPageDynamicTableModule } from '@po-ui/ng-templates';


@NgModule({
  declarations: [
    ReportesComponent
  ],
  imports: [
    CommonModule,
    ReportesRoutingModule,
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
export class ReportesModule { }
