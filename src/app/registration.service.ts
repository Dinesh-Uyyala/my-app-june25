import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Environment } from './environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private _httpClient:HttpClient) { }

  userRegistration(data:any):Observable<any>{
    return this._httpClient.post(Environment.registrationApi,data);
  }
}
