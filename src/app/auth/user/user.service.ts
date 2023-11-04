import { Injectable } from '@angular/core';
import { TokenService } from '../token.service';
import { jwtDecode } from "jwt-decode";
import { User } from './user';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usuarioSubject = new BehaviorSubject<User>({})

  constructor(private tokenService: TokenService) {
    if( this.tokenService.existeToken() ) {
      this.decodificarJWT();
    }
  }

  private decodificarJWT() {
    const token = this.tokenService.obtenerToken();
    const usuario = jwtDecode(token) as User;
    console.log('Decodificado',usuario)
    this.usuarioSubject.next(usuario);
  }

  returnUsuario() {
    return this.usuarioSubject.asObservable();
  }

  guardarToken(token: string) {
    this.tokenService.guardarToken(token);
    this.decodificarJWT();
  }

  eliminarToken(){
    this.tokenService.eliminarToken();
    this.usuarioSubject.next({});
  }

  isLogin(){
    return this.tokenService.existeToken();
  }
}
