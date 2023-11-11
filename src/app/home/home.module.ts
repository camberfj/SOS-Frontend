import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { PoPageBlockedUserModule, PoPageLoginModule } from '@po-ui/ng-templates';
import { PoImageModule, PoMenuModule, PoModule, PoToolbarModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './headers/header.component';


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
    RouterModule
  ]
})
export class HomeModule { }
