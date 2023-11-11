import { Component } from '@angular/core';
import { PoMenuItem } from '@po-ui/ng-components' ;
import { HomeService } from './service-home/home.service';

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
export class HomeComponent {
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
            {label: 'Nueva conexión', action: this.printMenuAction.bind(this)},
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
  constructor(public homeService: HomeService) {}

  printMenuAction(menu: PoMenuItem) {
    this.menuItemSelected = menu.label;
  }
}
