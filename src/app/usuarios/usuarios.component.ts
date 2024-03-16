import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PoModalAction, PoModalComponent, PoSelectOption, PoTableAction, PoTableColumn } from '@po-ui/ng-components';
import { NuevoUsuarioService } from './servicios/nuevo-usuario.service';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { NuevoUsuario, NuevoUsuarios } from './nuevo-usuario';
import { Observable, switchMap, take } from 'rxjs';
import { UserService } from '../auth/user/user.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit{
  @Input() id!: number;
  nuevoUsuarioForm!: FormGroup;
  columns: Array<PoTableColumn>;
  items: Array<NuevoUsuarios>;
  searchQuery: string;
  filterKeys: Array<string> = ['fullName', 'userName', 'email'];
  peopleFiltered: NuevoUsuario[] = [];
  @ViewChild('modalNuevoUsuario', { static: true }) modalNuevoUsuario: PoModalComponent;
  @ViewChild('usuarioDetailModal', { static: true }) usuarioDetailModal: PoModalComponent;
  @ViewChild('editUsuarioModal', { static: true }) editUsuarioModal: PoModalComponent;

  readonly statusOptions: Array<PoSelectOption> = [
    { label: 'Activo', value: 'activo' },
    { label: 'Observación', value: 'observación' },
    { label: 'Suspendido', value: 'suspendido' },
    { label: 'No cliente', value: 'no cliente' }
  ];


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

  constructor(private userService: UserService, private nuevoUsuarioService: NuevoUsuarioService, private router: Router, private formBuilder: FormBuilder ) {}

  ngOnInit(): void {
    this.columns = this.nuevoUsuarioService.getColumns();
    this.items = this.nuevoUsuarioService.getItems();
    /*this.nuevoUsuarioService.getItems();*/
    /*this.datos = this.nuevoUsuarioService.getDatos(this.id);*/
    this.nuevoUsuarioForm = this.formBuilder.group({
      fullName: ['', [ Validators.required, Validators.minLength(4)]],
      userName: [''],
      email: ['', [ Validators.required, Validators.email]],
      password: [''],
    },{
      validators: [],
    })
  }

  filtered(event: Array<any>) { /*Esto es para hacer la función de auto completado*/
    this.peopleFiltered = event;
    if (event.length === 4) {
      this.peopleFiltered = [];
    } else {
      try {
      } catch (error) {
        return undefined;
      }
    }
  }

  onSearch() {
    this.nuevoUsuarioService.getDatos(this.searchQuery).subscribe();
  }

  registrar() {
    if (this.nuevoUsuarioForm.valid) {
      const nuevousuario = this.nuevoUsuarioForm.getRawValue() as NuevoUsuario;
      this.nuevoUsuarioService.registrarUsuario(nuevousuario).subscribe({
        complete: () => this.nuevoUsuarioForm.reset(),
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
