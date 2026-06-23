import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class CheckoutApi {

  private http = inject(HttpClient);

  private apiUrl =
    'https://t4jinzo7ye.execute-api.us-east-1.amazonaws.com/prod/checkout';

  guardarPedido(datos: any): Observable<any> {
    return this.http.post(this.apiUrl, datos);
  }

}