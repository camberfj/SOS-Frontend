import { Injectable } from '@angular/core';
import { PoTableColumn, PoTagType } from '@po-ui/ng-components';
import { Comentario, Comentarios } from '../comentario';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API = environment.apiUrl

@Injectable({
  providedIn: 'root'
})
export class ReportesService {

  constructor(private httpClient: HttpClient) { }

  getColumns(): Array<PoTableColumn> {
    return [
      { property: 'idHotel', type: 'number', width: '4%'},
      { property: 'hotel', /*width: '4%'*/  },
      { property: 'usuario', label: 'Usuario', /*width: '4%'*/  },
      { property: 'fecha', label: 'Fecha', /*width: '4%'*/ },
      { property: 'epicas', type:'cellTemplate', label: 'Épicas' },
    ]
  }

  agregarComentario(id: number, commentText: string): Observable<Comentario> {
    return this.httpClient.post<Comentario>(`${API}/photos/${id}/comments`, {
      commentText
    });
}

  /*agregarComentario(commentText: string): Observable<Comentario>{
    return this.httpClient.post<Comentario>(`${API}/comments`, {
      commentText
    })
  }*/

  /*agregarEpica(id: number, commentText: string): Observable<Comentario>{
    return this.httpClient.post<Comentario>(`${API}/photos/${id}/Comments`, {
      commentText
    })
  }*/

  buscarComentarios(id: number): Observable<Comentarios>{
    return this.httpClient.get<Comentarios>(`${API}/photos/${id}/comments`);
  }

  getItems(): Array<any> {
    return [
      {
        idHotel: 1200,
        hotel: 'Amerian Reconquista',
        usuario: 'Natalia Seinturia',
        fecha: '12/03/2024',
        status: 'epicas'
      },
      {
        idHotel: 1355,
        hotel: 'Loi Iguazu',
        usuario: 'Sheila Altmark',
        fecha: '11/03/2024',
        status: 'epicas'
      },
      {
        idHotel: 1496,
        hotel: 'Asturias',
        usuario: 'Matias Fanelli',
        fecha: '10/03/2024',
        status: 'epicas'
      },
      {
        idHotel: 1712,
        hotel: 'Amerian Villa Del Dique',
        usuario: 'Pablo Cabrera',
        fecha: '09/03/2024',
        status: 'epicas'
      },
      {
        idHotel: 1881,
        hotel: 'Loi Recoleta',
        usuario: 'Natalia Seinturia',
        fecha: '08/03/2024',
        status: 'epicas'
      },
      {
        idHotel: 1551,
        hotel: 'Nogaro',
        usuario: 'Pablo Cabrera',
        fecha: '07/03/2024',
        status: 'epicas'
      }
    ]
  }
}
