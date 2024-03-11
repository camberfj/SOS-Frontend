import { Injectable } from '@angular/core';
import { PoTableColumn, PoTagType } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class ReportesService {

  constructor() { }

  getColumns(): Array<PoTableColumn> {
    return [
      { property: 'idHotel', type: 'number', width: '4%'},
      { property: 'hotel' },
      { property: 'usuario', label: 'Usuario', },
      { property: 'fecha', label: 'Fecha' },
      { property: 'nombre_pc', label: 'Nombre PC', },
      {
        property: 'status',
        type: 'label',
        label: 'Status',
        labels: [
          { value: 'activo', color: 'blue', label: 'Activo', },
          { value: 'activo', color: 'blue', label: 'Activo', },
          { value: 'observacion', color: 'rgb(15, 82, 54)', label: 'Observación', type: PoTagType.Success },
          { value: 'observacion', color: 'rgb(15, 82, 54)', label: 'Observación', type: PoTagType.Success },
          { value: 'suspendido', color: '#745678', label: 'Suspendido', },
          { value: 'no cliente', color: 'red', label: 'No cliente', }
        ]
      },
    ]
  }

  getItems(): Array<any> {
    return [
      {
        idHotel: 1200,
        hotel: 'Amerian Reconquista',
        usuario: 'Natalia Seinturia',
        fecha: '12/03/2024',
        nombre_pc: 'Servidor',
        status: 'activo'
      },
      {
        idHotel: 1355,
        hotel: 'Loi Iguazu',
        usuario: 'Sheila Altmark',
        fecha: '11/03/2024',
        nombre_pc: 'Recepción-pc',
        status: 'activo'
      },
      {
        idHotel: 1496,
        hotel: 'Asturias',
        usuario: 'Matias Fanelli',
        fecha: '10/03/2024',
        nombre_pc: 'PC-Bar',
        status: 'observacion'
      },
      {
        idHotel: 1712,
        hotel: 'Amerian Villa Del Dique',
        usuario: 'Pablo Cabrera',
        fecha: '09/03/2024',
        nombre_pc: 'Servidor',
        status: 'observacion'
      },
      {
        idHotel: 1881,
        hotel: 'Loi Recoleta',
        usuario: 'Natalia Seinturia',
        fecha: '08/03/2024',
        nombre_pc: 'DESKTOP-JI2Z9G3',
        status: 'suspendido'
      },
      {
        idHotel: 1551,
        hotel: 'Nogaro',
        usuario: 'Pablo Cabrera',
        fecha: '07/03/2024',
        nombre_pc: 'Servidor',
        status: 'no cliente'
      }
    ]
  }
}
