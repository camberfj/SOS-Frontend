import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { PoModule } from '@po-ui/ng-components';
import { HeaderComponent } from './headers/header.component';
import { DashboardComponent } from '../dashboard/dashboard.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: HeaderComponent
      }
    ]
  },
  {
    path: '',
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), PoModule],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
