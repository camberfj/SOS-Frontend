import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from 'src/app/auth/services/token.service';
import { environment } from 'src/environments/environment';
import { NuevoCliente } from '../nuevo-cliente/nuevo-cliente';

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


}
