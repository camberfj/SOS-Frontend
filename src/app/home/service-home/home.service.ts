import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PoMenuFilter, PoMenuItemFiltered } from '@po-ui/ng-components';
import { Observable, map } from 'rxjs';
import { NuevoUsuario } from '../nuevo-usuario';
import { environment } from 'src/environments/environment';

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class HomeService implements PoMenuFilter {
  private apiUrl: string = 'https://po-sample-api.fly.dev/v1/menus';

  constructor(private httpClient: HttpClient) {}

  url = `${API}/user`

  getFilteredData(search: string): Observable<Array<PoMenuItemFiltered>> {
    const params = { search };
    return this.httpClient.get(this.apiUrl, { params }).pipe(map((response: any) => response.items));
  }

  registrarUsuario(nuevoUsuario: NuevoUsuario) {
    return this.httpClient.post(`${this.url}/signup`, nuevoUsuario)
  }
}
