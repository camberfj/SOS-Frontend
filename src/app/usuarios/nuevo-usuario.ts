export interface NuevoUsuario {
  userName: string;
  email: string;
  fullName: string;
  password: string;
}

export type NuevoUsuarios = Array<NuevoUsuario>
