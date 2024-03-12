import { Injectable } from '@angular/core';
import { PoTableColumn, PoTagType } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class ConexionesService {

  constructor() { }

  getColumns(): Array<PoTableColumn> {
    return [
      { property: 'idHotel', type: 'number', width: '4%'},
      { property: 'hotel' },
      { property: 'tipo_de_conexion', label: 'Tipo de conexión', },
      { property: 'datos_de_conexion', label: 'Datos de conexión' },
      { property: 'terminal', label: 'Terminal' },
      {
        property: 'status',
        type: 'label',
        label: 'Status',
        labels: [
          { value: 'activo', color: 'blue', label: 'Activo', },
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
        tipo_de_conexion: 'Centraliza',
        terminal: 'Servidor',
        datos_de_conexion: 18041822,
        status: 'activo'
      },
      {
        idHotel: 1355,
        hotel: 'Loi Iguazu',
        tipo_de_conexion: 'Channel',
        terminal: 'Recepción-pc',
        datos_de_conexion: 18041821,
        status: 'activo'
      },
      {
        idHotel: 1496,
        hotel: 'Asturias',
        tipo_de_conexion: 'Servicios BT',
        terminal: 'PC-Bar',
        datos_de_conexion: 18041820,
        status: 'observacion'
      },
      {
        idHotel: 1712,
        hotel: 'Amerian Villa Del Dique',
        tipo_de_conexion: 'Amerian Franquicia',
        terminal: 'Servidor',
        datos_de_conexion: 18041819,
        status: 'observacion'
      },
      {
        idHotel: 1881,
        hotel: 'Loi Recoleta',
        tipo_de_conexion: 'Facturación Electronica',
        terminal: 'DESKTOP-JI2Z9G3',
        datos_de_conexion: 18041825,
        status: 'suspendido'
      },
      {
        idHotel: 1551,
        hotel: 'Nogaro',
        tipo_de_conexion: 'Comanda Electronica',
        terminal: 'Servidor',
        datos_de_conexion: 18041888,
        status: 'no cliente'
      },
      {
        idHotel: 1551,
        hotel: 'Time Select',
        tipo_de_conexion: 'Comanda Electronica',
        terminal: 'Servidor',
        datos_de_conexion: 18041888,
        status: 'no cliente'
      }
    ]
  }
}
