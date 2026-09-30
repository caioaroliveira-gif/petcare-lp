export interface LoginData {
  id: string;
  nome: string;
  email: string;
  senha: string;
  id_cargo: string
}

export interface LoginResponse {
  nome: string;
  email: string;
  id_cargo: string;
}
