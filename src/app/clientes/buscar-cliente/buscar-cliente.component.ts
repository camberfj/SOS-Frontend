import { Component, ViewChild } from '@angular/core';
import { PoModalComponent, PoSelectOption, PoTableAction, PoTableColumn,} from '@po-ui/ng-components';
import { ClientesService } from '../services/clientes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscar-cliente',
  templateUrl: './buscar-cliente.component.html',
  styleUrls: ['./buscar-cliente.component.scss']
})
export class BuscarClienteComponent {
  columns: Array<PoTableColumn>;
  items: Array<any>;
  @ViewChild('modalNuevoCliente', { static: true }) modalNuevoCliente: PoModalComponent;
  @ViewChild('hotelDetailModal', { static: true }) hotelDetailModal!: PoModalComponent;
  @ViewChild('contactoModal', { static: true }) contactoModal!: PoModalComponent;
  @ViewChild('editHotelModal', { static: true }) editHotelModal!: PoModalComponent;


  readonly statusOptions: Array<PoSelectOption> = [
    { label: 'Activo', value: 'activo' },
    { label: 'Observación', value: 'observación' },
    { label: 'Suspendido', value: 'suspendido' },
    { label: 'No cliente', value: 'no cliente' }
  ];

  actions: Array<PoTableAction> = [
    { label: 'Opciones:' },
    { action: this.details.bind(this), icon: 'po-icon-info', label: 'Ver detalles' },
    { action: this.contacto.bind(this), icon: 'po-icon-telephone', label: 'Agregar contacto' },
    { action: this.editar.bind(this), icon: 'po-icon-edit', label: 'Editar' },
    { action: this.remove.bind(this), icon: 'po-icon po-icon-delete', label: 'Borrar' }
  ];

  actionsRight = false;

  constructor(private clientesService: ClientesService, private router: Router) {}

  ngOnInit () {
    this.columns = this.clientesService.getColumns();
    this.items = this.clientesService.getItems();
  }

  homeLogin() {
    this.router.navigate(['home'])
  }

  modal() {
    this.modalNuevoCliente.open();
  }

  details() {
    this.hotelDetailModal.open();
  }

  contacto(){
    this.contactoModal.open();
  }

  editar() {
    this.editHotelModal.open();
  }

  remove(item: { [key: string]: any }) {}


}
