import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NuevoUsuario, NuevoUsuarios } from '../nuevo-usuario';
import { PoTableColumn, PoTagType } from '@po-ui/ng-components';
import { Observable } from 'rxjs';

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class NuevoUsuarioService {

  constructor(private http: HttpClient) {}

  url = `${API}/user`


  registrarUsuario(nuevoUsuario: NuevoUsuario) {
    return this.http.post(`${this.url}/signup`, nuevoUsuario)
  }

  getColumns(): Array<PoTableColumn> {
    return [
      { property: 'idUsuario', label: 'Idusuario', type: 'number', width: '4%'},
      { property: 'nombre', label: 'Nombre' },
      { property: 'correo', label: 'Correo Electrónico', },
      { property: 'telefono', label: 'Telefono Personal' },
      { property: 'telefonoEmergencia', label: 'Telefono De Emergencia' },
      {
        property: 'permisos',
        type: 'label',
        label: 'Permisos de usuario',
        labels: [
          { value: 'gerencia', color: 'blue', label: 'Gerencia', },
          { value: 'administrativo', color: 'rgb(15, 82, 54)', label: 'Administrativo', type: PoTagType.Success },
          { value: 'suspendido', color: '#745678', label: 'Suspendido', },
          { value: 'no cliente', color: 'red', label: 'No cliente', }
        ]
      },
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

  /*getItems(): Observable<NuevoUsuarios> {
    return this.http.get<NuevoUsuarios>(`${this.url}/signup`,)
  }*/

  /*getItems(usuario: number): Observable<NuevoUsuarios> {
    return this.httpClient.get<NuevoUsuarios>(`${API}/${usuario}/photos`);
  }*/

  getDatos(searchQuery: string): Observable<NuevoUsuarios>{
    return this.http.get<NuevoUsuarios>(`${this.url}?name=${searchQuery}`);
  }

  /*getItems(id: number): Observable<NuevoUsuarios> {
    return this.httpClient.get<NuevoUsuarios>(`${API}/photos/${id}/comments`);
  }*/

  /*getDatos(): Array<any> { Función para agarrar los usuarios de backend
    return [
      {
        idUsuario: 1200,
        telefono: 18041822,
        telefonoEmergencia: 114567323,
        permisos: 'administrativo',
        status: 'activo'
      }
    ]
  }*/

  getItems(): Array<any> {
    return [
      {
        idUsuario: 1200,
        nombre: 'Gonzalo Biedma',
        correo: 'gonzalo.biedma@totvs.com',
        telefono: 18041822,
        telefonoEmergencia: 114567323,
        permisos: 'administrativo',
        status: 'activo'
      },
      {
        idUsuario: 1355,
        nombre: 'Juan Manzur',
        correo: 'juan.manzur@totvs.com',
        telefono: 18041821,
        telefonoEmergencia: 114567434,
        permisos: 'administrativo',
        status: 'activo'
      },
      {
        idUsuario: 1496,
        nombre: 'Natalia Seintura',
        correo: 'natalia.seintura@totvs.com',
        telefono: 18041820,
        telefonoEmergencia: 116578930,
        permisos: 'gerencia',
        status: 'activo'

      },
      {
        idUsuario: 1712,
        nombre: 'Pedro Cabrera',
        correo: 'pedro.cabrera@totvs.com',
        telefono: 18041819,
        telefonoEmergencia: 114569025,
        permisos: 'administrativo',
        status: 'activo'
      },
      {
        idUsuario: 1881,
        nombre: 'Sheila Altmark',
        correo: 'sheila.altmark@totvs.com',
        telefono: 18041825,
        telefonoEmergencia: 110489362,
        permisos: 'gerencia',
        status: 'activo'
      },
      {
        idUsuario: 1551,
        nombre: 'Matias Fanelli',
        correo: 'matias.fanelli@totvs.com',
        telefono: 18041888,
        telefonoEmergencia: 114902389,
        permisos: 'administrativo',
        status: 'activo'
      }
    ]
  }
}
