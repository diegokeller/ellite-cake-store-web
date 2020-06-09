import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CakeStoreApiService {

  constructor(
    private http: HttpClient
  ) { }

  getProdutos(): Observable<any> {
    console.log('Obtendo produtos');
    return this.http.get<any>(`${environment.urlApiLoja}/produtos.json`);
  }

  getProduto(id: number): Observable<any> {
    console.log(`Buscando produto ${id}`);
    return this.http.get<any>(`${environment.urlApiLoja}/produtos/${id}.json`);
  }

}
