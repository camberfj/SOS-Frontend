import { Cliente } from './../cliente';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { TokenService } from 'src/app/auth/services/token.service';
import { environment } from 'src/environments/environment';

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ClientesService {


  constructor(private httpClient: HttpClient, private tokenService: TokenService) {}

  url = `http://localhost:3000`;

  registrarCliente(cliente: Cliente) {
    return this.httpClient.post(`${this.url}/signup`, cliente)
  }


}
