export interface Cliente {
  id: number;
  postDate: Date;
  url: string;
  description: string;
  comments: number;
  userId: number;
}

export type Clientes = Array<Cliente>
