import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environment } from './environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _httpClient:HttpClient) { }
  userLogin(data:any){
    return this._httpClient.post(Environment.loginApi,data)
  }
}
