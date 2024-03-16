import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { PoMenuItem, } from '@po-ui/ng-components' ;
import { HomeService } from './service-home/home.service';
import { Router } from '@angular/router';
import { UserService } from '../auth/user/user.service';
import { FormGroup, } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  styles: [
    `
      .sample-menu-header-text-color {
        color: #9da7a9;
      }
    `
  ]
})
export class HomeComponent implements OnInit {
  nuevoUsuarioForm!: FormGroup;
  user$ = this.userService.returnUsuario();/*Este arreglo devuelve el usuario que se loguea*/

  menuItemSelected: string;

  menus: Array<PoMenuItem> = [
    {
      label: 'Usuarios',
      icon: 'po-icon-user-add',
      shortLabel: 'Register',
      action: () => this.usuarios(),
    },
    {
      label: 'Hoteles',
      icon: 'po-icon-company',
      shortLabel: 'Hoteles',
      action: () => this.newQuery(),
    },
    {
      label: 'Conexiones',
      icon: 'po-icon-world',
      shortLabel: 'Hoteles',
      action: () => this.editConexion(),
    },
    {
      label: 'Épicas',
      icon: 'po-icon-news',
      shortLabel: 'Links',
      action: () => this.newEpica(),
    },
    {
      label: 'Configuración',
      action: this.printMenuAction.bind(this),
      icon: 'po-icon-settings',
      shortLabel: 'Timekeeping',
    },
  ];
  constructor(private userService: UserService, private homeService: HomeService,  private router: Router) {}

  ngOnInit(): void {}

  printMenuAction(menu: PoMenuItem) {
    this.menuItemSelected = menu.label;
  }

  usuarios() {
    this.router.navigate(['usuarios']);
  }

  newQuery() {
    this.router.navigate(['clientes'])
  }

  editConexion() {
    this.router.navigate(['conexiones'])
  }

  newEpica() {
    this.router.navigate(['reportes'])
  }

}
