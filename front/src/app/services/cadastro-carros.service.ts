import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CadastroCarrosService {

  

  constructor( private http : HttpClient) { }




  public getCarros():Observable<any>{
    return this.http.get(`${environment.url}/carros`);
  }
  public createCarros(carros: {id, ano, descricao, marca, modelo}){
    return this.http.post(`${environment.url}/carros`, carros);  
  }

  deleteCarro(id: number): Observable<any>{
    return this.http.delete(`${environment.url}/carros/${id}`, { responseType: 'text' });
  }

  



  

}
