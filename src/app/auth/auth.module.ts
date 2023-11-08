import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { PoPageBlockedUserModule, PoPageLoginModule } from '@po-ui/ng-templates';
import { PoImageModule, PoModule } from '@po-ui/ng-components';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoginComponent,],
  imports: [
    CommonModule,
    AuthRoutingModule,
    PoPageLoginModule,
    PoModule,
    PoPageBlockedUserModule,
    PoImageModule,
    FormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
})
export class AuthModule { }
