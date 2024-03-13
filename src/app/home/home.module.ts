import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { PoPageBlockedUserModule, PoPageLoginModule } from '@po-ui/ng-templates';
import { PoImageModule, PoMenuModule, PoModalModule, PoModule, PoToolbarModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './headers/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardModule } from '../dashboard/dashboard.module';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    PoPageLoginModule,
    PoModule,
    PoPageBlockedUserModule,
    PoImageModule,
    PoToolbarModule,
    PoMenuModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgFor,
    PoModalModule,
    DashboardModule
  ]
})
export class HomeModule { }
