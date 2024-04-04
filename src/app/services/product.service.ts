import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import {  ProductResponseModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private categoryUrl: string = '/products/categories';
  private productByCategoryName: string = '/products/category/';

  constructor(private readonly http: HttpClient) { }

  getProductCategories(): Observable<string[]> {
    return this.http.get<string[]>(`${environment.apiBase}${this.categoryUrl}`);
  }

  getProductsByCategoryName(categoryName: string): Observable<ProductResponseModel> {
    return this.http.get<ProductResponseModel>(`${environment.apiBase}${this.productByCategoryName}${categoryName}`);
  }
}
