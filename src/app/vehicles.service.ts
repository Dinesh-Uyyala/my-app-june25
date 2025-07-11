import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  constructor(private _httpClient:HttpClient) { }
  // apiUrl:string='/assets/data.json'
  apiUrl:string="https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction";
  
  getVehicles():Observable<any>{
    return this._httpClient.get(this.apiUrl);
  }
  getVehicle(id:number):Observable<any>{
    return this._httpClient.get(this.apiUrl+"/"+id);
  }
  getFilteredVehicles(term:any):Observable<any>{
   return this._httpClient.get(this.apiUrl+"?filter="+term);
  }
  getSortedVehicles(column:string,order:string):Observable<any>{
   return this._httpClient.get(this.apiUrl+"?sortBy="+column+"&order="+order);
  }
  getPaginatedVehicles(items:any,page:any):Observable<any>{
   return this._httpClient.get(this.apiUrl+"?limit="+items+"&page="+page);
  }
  createVehicle(data:any):Observable<any>{
   return this._httpClient.post(this.apiUrl,data);
  }
  deleteVehicle(id:any):Observable<any>{
   return this._httpClient.delete(this.apiUrl+"/"+id);
  }
  updateVehicle(id:any, data:any):Observable<any>{
   return this._httpClient.put(this.apiUrl+"/"+id,data);
  }
}
