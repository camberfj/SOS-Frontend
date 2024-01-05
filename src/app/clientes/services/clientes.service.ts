import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { TokenService } from 'src/app/auth/services/token.service';
import { environment } from 'src/environments/environment';
import { Clientes } from '../cliente';

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ClientesService {


  constructor(private http: HttpClient, private tokenService: TokenService) {}

  listaDeUsuario(usuario: string): Observable<Clientes> {
    return this.http.get<Clientes>('http://localhost:3000')
  }


}
