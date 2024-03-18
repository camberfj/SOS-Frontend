import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { PoContainerModule, PoModalModule, PoModule, PoTableModule, PoWidgetModule } from '@po-ui/ng-components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    PoContainerModule,
    PoModule,
    PoModalModule,
    ReactiveFormsModule,
    PoWidgetModule,
    FormsModule,
    PoTableModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
