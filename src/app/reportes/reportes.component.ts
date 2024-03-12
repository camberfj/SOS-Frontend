import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ReportesService } from './servicios/reportes.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PoModalAction, PoModalComponent, PoSelectOption, PoTableAction, PoTableColumn } from '@po-ui/ng-components';
import { Observable, switchMap, tap } from 'rxjs';
import { Comentarios } from './comentario';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.scss']
})
export class ReportesComponent implements OnInit{
  @Input() id!: number;
  comentarios$!: Observable<Comentarios>
  comentarioForm !: FormGroup
  detailedHotel: any;
  nuevaEpicaForm!: FormGroup;
  columns: Array<PoTableColumn>;
  items: Array<any>;
  @ViewChild('modalNuevaEpica', { static: true }) modalNuevaEpica: PoModalComponent;
  @ViewChild('editDetailModal', { static: true }) editDetailModal: PoModalComponent;
  @ViewChild('hotelDetailModal', { static: true }) hotelDetailModal: PoModalComponent;

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
      this.agregarEpica();
    },
    label: 'Agregar'
  };

  constructor(private reportesService: ReportesService, private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.comentarios$ = this.reportesService.buscarComentarios(this.id)
    this.columns = this.reportesService.getColumns();
    this.items = this.reportesService.getItems();
  }

  isUndelivered() {}

  homeLogin() {
    this.router.navigate(['home'])
  }

  abrirModal() {
    this.modalNuevaEpica.open()
  }

  cerrarModal() {
    this.modalNuevaEpica.close()
  }

  details() {
    this.hotelDetailModal.open();
  }

  editDetails() {
    this.editDetailModal.open();
  }

  remove(item: { [key: string]: any }) {}

  agregarEpica(): void{
    const comentario = this.comentarioForm.get('comentario')?.value ?? '';
    this.comentarios$ = this.reportesService.agregarEpica(this.id, comentario).pipe(
      switchMap( () => {
       return this.reportesService.buscarComentarios(this.id);
      }),
      tap( () => {
        this.comentarioForm.reset();
      })
    );
  }

}
