import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NuevoUsuario } from '../nuevo-usuario';
import { PoTableColumn } from '@po-ui/ng-components';

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class NuevoUsuarioService {

  constructor(private httpClient: HttpClient) {}

  url = `${API}/user`


  registrarUsuario(nuevoUsuario: NuevoUsuario) {
    return this.httpClient.post(`${this.url}/signup`, nuevoUsuario)
  }

  getColumns(): Array<PoTableColumn> {
    return [
      { property: 'idHotel', type: 'number', width: '4%'},
      { property: 'hotel' },
      { property: 'tipo_de_conexion', label: 'Tipo de conexión', width: '4%' },
      { property: 'datos_de_conexion', label: 'Datos de conexión' },
      { property: 'nombre_pc', label: 'Nombre PC' }
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
      },
      {
        idHotel: 1355,
        hotel: 'Loi Iguazu',
        tipo_de_conexion: 'Anydesk',
        nombre_pc: 'Recepción-pc',
        datos_de_conexion: 18041821,
      },
      {
        idHotel: 1496,
        hotel: 'Asturias',
        tipo_de_conexion: 'Anydesk',
        nombre_pc: 'PC-Bar',
        datos_de_conexion: 18041820,
      },
      {
        idHotel: 1712,
        hotel: 'Amerian Villa Del Dique',
        tipo_de_conexion: 'Teamviewer',
        nombre_pc: 'Servidor',
        datos_de_conexion: 18041819,
      },
      {
        idHotel: 1881,
        hotel: 'Loi Recoleta',
        tipo_de_conexion: 'Anydesk',
        nombre_pc: 'DESKTOP-JI2Z9G3',
        datos_de_conexion: 18041825,
      },
      {
        idHotel: 1551,
        hotel: 'Nogaro',
        tipo_de_conexion: 'Teamviewer',
        nombre_pc: 'Servidor',
        datos_de_conexion: 18041888,
      }
    ]
  }
}
