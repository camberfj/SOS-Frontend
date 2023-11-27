import { Component, Input, OnInit } from '@angular/core';
import { PoMenuItem } from '@po-ui/ng-components' ;
import { HomeService } from './service-home/home.service';
import { Router } from '@angular/router';
import { UserService } from '../auth/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  styles:[
    `
      .sample-menu-header-text-color {
        color: #9da7a9;
      }
    `
  ]
})
export class HomeComponent implements OnInit {
  user$ = this.userService.returnUsuario();

  menuItemSelected: string;

  menus: Array<PoMenuItem> = [
    {label: 'Nuevo usuario', action: this.printMenuAction.bind(this), icon: 'po-icon-user', shortLabel: 'Register'},
    {
      label: 'Hoteles',
      icon: 'po-icon-company',
      shortLabel: 'Hoteles',
      subItems: [
        {
          label: 'Conexiones',
          action: this.printMenuAction.bind(this),
          subItems: [
            {label: 'Nueva conexión', action: () => this.newQuery()},
            {label: 'Agregar conexión', action: this.printMenuAction.bind(this)}
          ]
        },
        {
          label: 'Épicas',
          subItems: [
            {label: 'Nueva épica',action: this.printMenuAction.bind(this),},
            {label: 'Historial épica', action: this.printMenuAction.bind(this)},
            {label: 'Agregar épicas', action: this.printMenuAction.bind(this)}
          ]
        },
        { label:'Licencias',
          action: this.printMenuAction.bind(this),
          subItems: [
            {label: ''}
          ]
        },
      ]
    },
    {
      label: 'Reportes',
      icon: 'po-icon-news',
      shortLabel: 'Links',
      subItems: [
        {label: 'Conexiones', action: this.printMenuAction.bind(this), link: 'http://trabalho.gov.br/'},
        {label: 'Agregar nueva conexión', action: this.printMenuAction.bind(this), link: 'http://www.sindpd.com.br/'}
      ]
    },
    {
      label: 'Configuración',
      action: this.printMenuAction.bind(this),
      icon: 'po-icon-settings',
      shortLabel: 'Timekeeping',
    },
  ];
  constructor(private userService: UserService, private homeService: HomeService,  private router: Router) {}

  ngOnInit(): void {

  }

  printMenuAction(menu: PoMenuItem) {
    this.menuItemSelected = menu.label;
  }

  newQuery() {
    this.router.navigate(['clientes'])
  }

}
