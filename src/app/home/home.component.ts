import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { PoMenuItem, PoModalAction, PoModalComponent } from '@po-ui/ng-components' ;
import { HomeService } from './service-home/home.service';
import { Router } from '@angular/router';
import { UserService } from '../auth/user/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NuevoUsuario } from './nuevo-usuario';

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
  nuevoUsuarioForm!: FormGroup;
  user$ = this.userService.returnUsuario();
  @ViewChild('modalNuevoUsuario', { static: true }) modalNuevoUsuario: PoModalComponent;

  menuItemSelected: string;

  close: PoModalAction = {
    action: () => {
      this.closeModal();
    },
    label: 'Cancelar',
    danger: true
  };

  confirm: PoModalAction = {
    action: () => {
      this.registrar();
    },
    label: 'Registrar'
  };

  menus: Array<PoMenuItem> = [
    {label: 'Usuarios',
    icon: 'po-icon-user',
    shortLabel: 'Register',
    subItems: [
      {
        label: 'Nuevo usuario',
        action: () => this.modal(),
      }
    ]
  },
    {
      label: 'Hoteles',
      icon: 'po-icon-company',
      shortLabel: 'Hoteles',
      subItems: [
        {
          label: 'Conexiones',
          action: () => this.newQuery(),
        },
        {
          label: 'Observaciones',
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
  constructor(private userService: UserService, private homeService: HomeService,  private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.nuevoUsuarioForm = this.formBuilder.group({
      fullName: ['', [ Validators.required, Validators.minLength(4)]],
      userName: [''],
      email: ['', [ Validators.required, Validators.email]],
      password: [''],
    },{
      validators: [],
    })
  }

  printMenuAction(menu: PoMenuItem) {
    this.menuItemSelected = menu.label;
  }

  newQuery() {
    this.router.navigate(['clientes'])
  }

  modal() {
    this.modalNuevoUsuario.open();
  }

  closeModal() {
    this.modalNuevoUsuario.close();
  }

  registrar() {
    if (this.nuevoUsuarioForm.valid) {
      const nuevousuario = this.nuevoUsuarioForm.getRawValue() as NuevoUsuario;
      this.homeService.registrarUsuario(nuevousuario).subscribe({
        complete: () => this.router.navigate(['']),
        error: () => alert('No fue posible hacer el registro'),
      });
    } else {
      alert('verifica el formulario')
    }
  }

}
