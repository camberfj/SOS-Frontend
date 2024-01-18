import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NuevoUsuario } from '../nuevo-usuario';
import { environment } from 'src/environments/environment';

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpClient: HttpClient) {}

  url = `${API}/user`


  registrarUsuario(nuevoUsuario: NuevoUsuario) {
    return this.httpClient.post(`${this.url}/signup`, nuevoUsuario)
  }
}
