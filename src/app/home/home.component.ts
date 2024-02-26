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
    {
      label: 'Nuevo usuario',
      icon: 'po-icon-user-add',
      shortLabel: 'Register',
      action: () => this.modal(),
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

  editConexion() {
    this.router.navigate(['conexiones'])
  }

  newEpica() {}

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
