import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private http = inject(HttpClient);

  private apiUrl =
    'https://t4jinzo7ye.execute-api.us-east-1.amazonaws.com/prod/productos';

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }
}