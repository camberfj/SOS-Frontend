import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { PoPageBlockedUserModule, PoPageLoginModule } from '@po-ui/ng-templates';
import { PoImageModule, PoModule } from '@po-ui/ng-components';
import { DialogHomeComponent } from './dialog-home/dialog-home.component';


@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    DialogHomeComponent,
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
