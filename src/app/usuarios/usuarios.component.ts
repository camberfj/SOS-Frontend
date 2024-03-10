import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PoModalAction, PoModalComponent, PoTableAction, PoTableColumn } from '@po-ui/ng-components';
import { NuevoUsuarioService } from './servicios/nuevo-usuario.service';
import { Router } from '@angular/router';
import { NuevoUsuario } from './nuevo-usuario';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit{
  detailedHotel: any;
  nuevoUsuarioForm!: FormGroup;
  columns: Array<PoTableColumn>;
  items: Array<any>;
  @ViewChild('modalNuevoUsuario', { static: true }) modalNuevoUsuario: PoModalComponent;
  @ViewChild('usuarioDetailModal', { static: true }) usuarioDetailModal: PoModalComponent;
  @ViewChild('editUsuarioModal', { static: true }) editUsuarioModal: PoModalComponent;


  actions: Array<PoTableAction> = [
    { label: 'Opciones:' },
    { action: this.details.bind(this), icon: 'po-icon-info', label: 'Ver detalles' },
    { action: this.editDetails.bind(this), icon: 'po-icon-edit', label: 'Editar' },
    { action: this.remove.bind(this), icon: 'po-icon po-icon-delete', label: 'Borrar' }
  ];


  close: PoModalAction = {
    action: () => {
      this.cerrarModal();
    },
    label: 'Cancelar'
  };

  confirm: PoModalAction = {
    action: () => {
      this.registrar();
    },
    label: 'Agregar'
  };

  constructor(private nuevoUsuarioService: NuevoUsuarioService, private router: Router, private formBuilder: FormBuilder ) {}

  ngOnInit(): void {
    this.columns = this.nuevoUsuarioService.getColumns();
    this.items = this.nuevoUsuarioService.getItems();
    this.nuevoUsuarioForm = this.formBuilder.group({
      fullName: ['', [ Validators.required, Validators.minLength(4)]],
      userName: [''],
      email: ['', [ Validators.required, Validators.email]],
      password: [''],
    },{
      validators: [],
    })
  }

  registrar() {
    if (this.nuevoUsuarioForm.valid) {
      const nuevousuario = this.nuevoUsuarioForm.getRawValue() as NuevoUsuario;
      this.nuevoUsuarioService.registrarUsuario(nuevousuario).subscribe({
        complete: () => this.router.navigate(['']),
        error: () => alert('No fue posible hacer el registro'),
      });
    } else {
      alert('verifica el formulario')
    }
  }

  homeLogin() {
    this.router.navigate(['home'])
  }

  abrirModal() {
    this.modalNuevoUsuario.open()
  }

  cerrarModal() {
    this.modalNuevoUsuario.close()
  }

  details() {
    this.usuarioDetailModal.open();
  }

  editDetails() {
    this.editUsuarioModal.open();
  }

  remove(item: { [key: string]: any }) {}


}
