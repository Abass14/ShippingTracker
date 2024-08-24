export interface ILoginRequest {
    usr: string
    pwd: string
}

export interface ILoginResponse {
  full_name: string;
  home_page: string;
  message: string;
}