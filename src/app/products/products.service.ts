import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_BASE } from '../shared/feature-flag.const';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  private readonly base = API_BASE;

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get<any>(`${this.base}/products`);
  }
}
