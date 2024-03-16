import { Injectable } from '@angular/core';
import { PoTableColumn, PoTagType } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  getColumns(): Array<PoTableColumn> {
    return [
      { property: 'tipo_de_conexion', label: 'Tipo de conexión', },
      { property: 'datos_de_conexion', label: 'Datos de conexión' },
      { property: 'password', label: 'Password' },
      { property: 'terminal', label: 'Terminal' },
    ]
  }

  getItems(): Array<any> {
    return [
      {
        tipo_de_conexion: 'Centraliza',
        datos_de_conexion: 18041822,
        password: 'FGB6543',
        terminal: 'Servidor',
        status: 'activo'
      },
      {
        tipo_de_conexion: 'Channel',
        datos_de_conexion: 18041821,
        password: 'AH93208',
        terminal: 'Pc-channel',
        status: 'activo'
      },
      {
        tipo_de_conexion: 'Comanda Electronica',
        password: '9583710',
        datos_de_conexion: 52041694,
        terminal: 'DESKTOP-JI5Z73E',
        status: 'suspendido'
      },
      {
        tipo_de_conexion: 'Facturación Electronica',
        password: '6583926',
        datos_de_conexion: 18041820,
        terminal: 'Pc-local',
        status: 'observacion'
      },
      {
        tipo_de_conexion: 'Recepción',
        password: '2663432',
        datos_de_conexion: 18041819,
        terminal: 'Pc-recepción',
        status: 'observacion'
      },
      {
        tipo_de_conexion: 'Servicios BT',
        password: '9583710',
        datos_de_conexion: 18041825,
        terminal: 'DESKTOP-JI2Z9G3',
        status: 'suspendido'
      },
    ]
  }
}
