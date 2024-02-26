import { Component, OnInit, ViewChild } from '@angular/core';
import { PoBreadcrumb, PoModalAction, PoModalComponent, PoSelectOption } from '@po-ui/ng-components';
import { PoTableColumn } from '@po-ui/ng-components';
import { ConexionesService } from './services/conexiones.service';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-conexiones',
  templateUrl: './conexiones.component.html',
  styleUrls: ['./conexiones.component.scss'],
})
export class ConexionesComponent {
  nuevaConexionForm!: FormGroup;
  columns: Array<PoTableColumn>;
  items: Array<any>;
  @ViewChild('modalNuevaConexion', { static: true }) modalNuevaConexion: PoModalComponent;

  close: PoModalAction = {
    action: () => {
      this.cerrarModal();
    },
    label: 'Cancelar'
  }

  confirm: PoModalAction = {
    action: () => {
      this.agregarConexion();
    },
    label: 'Agregar'
  };

  constructor(private conexionesService: ConexionesService, private router: Router) {}

  ngOnInit() {
    this.columns = this.conexionesService.getColumns();
    this.items = this.conexionesService.getItems();
  }

  isUndelivered() {}

  homeLogin() {
    this.router.navigate(['home'])
  }

  abrirModal() {
    this.modalNuevaConexion.open()
  }

  agregarConexion() {}

  cerrarModal() {}


}

