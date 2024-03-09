import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from 'src/app/auth/services/token.service';
import { environment } from 'src/environments/environment';
import { NuevoCliente } from '../nuevo-cliente/nuevo-cliente';
import { PoTableColumn, PoTagType } from '@po-ui/ng-components';

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ClientesService {


  constructor(private httpClient: HttpClient, private tokenService: TokenService) {}

  url = `${API}/user`

  registrarCliente(nuevoCliente: NuevoCliente) {
    return this.httpClient.post(`${this.url}/signup`, nuevoCliente)
  }

  getColumns(): Array<PoTableColumn> {
    return [
      { property: 'idHotel', type: 'number', width: '4%'},
      { property: 'hotel' },
      { property: 'tipo_de_conexion', label: 'Tipo de conexión', },
      { property: 'datos_de_conexion', label: 'Datos de conexión' },
      { property: 'nombre_pc', label: 'Nombre PC' },
      {
        property: 'status',
        type: 'cellTemplate',
        label: 'Status',
        width: '8%',
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
        tipo_de_conexion: 'Teamviewer',
        nombre_pc: 'Servidor',
        datos_de_conexion: 18041822,
        status:'activo'
      },
      {
        idHotel: 1355,
        hotel: 'Loi Iguazu',
        tipo_de_conexion: 'Anydesk',
        nombre_pc: 'Recepción-pc',
        datos_de_conexion: 18041821,
        status:'activo'
      },
      {
        idHotel: 1496,
        hotel: 'Asturias',
        tipo_de_conexion: 'Anydesk',
        nombre_pc: 'PC-Bar',
        datos_de_conexion: 18041820,
        status:'observacion'
      },
      {
        idHotel: 1712,
        hotel: 'Amerian Villa Del Dique',
        tipo_de_conexion: 'Teamviewer',
        nombre_pc: 'Servidor',
        datos_de_conexion: 18041819,
        status:'observacion'
      },
      {
        idHotel: 1881,
        hotel: 'Loi Recoleta',
        tipo_de_conexion: 'Anydesk',
        nombre_pc: 'DESKTOP-JI2Z9G3',
        datos_de_conexion: 18041825,
        status:'suspendido'
      },
      {
        idHotel: 1551,
        hotel: 'Nogaro',
        tipo_de_conexion: 'Teamviewer',
        nombre_pc: 'Servidor',
        datos_de_conexion: 18041888,
        status:'no cliente'
      }
    ]
  }


}
