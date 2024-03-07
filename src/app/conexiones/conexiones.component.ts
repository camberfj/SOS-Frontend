import { Component, OnInit, ViewChild } from '@angular/core';
import { PoModalAction, PoModalComponent, PoDynamicViewField, PoTableAction } from '@po-ui/ng-components';
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
  detailedHotel: any;
  nuevaConexionForm!: FormGroup;
  columns: Array<PoTableColumn>;
  items: Array<any>;
  @ViewChild('modalNuevaConexion', { static: true }) modalNuevaConexion: PoModalComponent;

  @ViewChild('hotelDetailModal', { static: true }) hotelDetailModal: PoModalComponent;

  actions: Array<PoTableAction> = [
    { label: 'Opciones:' },
    { action: this.details.bind(this), icon: 'po-icon-info', label: 'Ver detalles' },
    { action: this.details.bind(this), icon: 'po-icon-edit', label: 'Editar' },
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
      this.agregarConexion();
    },
    label: 'Agregar'
  };

  readonly detailFields: Array<PoDynamicViewField> = [{ property: 'name', gridLgColumns: 4, divider: 'Info' },];

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

  cerrarModal() {
    this.modalNuevaConexion.close()
  }

  details() {
    this.hotelDetailModal.open();
  }

  remove(item: { [key: string]: any }) {}


}

