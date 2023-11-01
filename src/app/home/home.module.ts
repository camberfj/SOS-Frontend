import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { PoPageBlockedUserModule, PoPageLoginModule } from '@po-ui/ng-templates';
import { PoImageModule, PoModule } from '@po-ui/ng-components';


@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,

  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    PoPageLoginModule,
    PoModule,
    PoPageBlockedUserModule,
    PoImageModule,
  ]
})
export class HomeModule { }
