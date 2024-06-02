import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPagination } from '../shared/models/pagination.model';
import { IBrand } from '../shared/models/brand.model';
import { IProductType } from '../shared/models/product-type.model';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl = 'https://localhost:7141/api/'

  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get<IPagination>(this.baseUrl + 'products');
  }

  getBrands(){
    return this.http.get<IBrand[]>(this.baseUrl + 'products/brands');
  }

  getProductTypes(){
    return this.http.get<IProductType[]>(this.baseUrl + 'products/types');
  }
}
