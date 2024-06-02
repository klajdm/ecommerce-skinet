import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPagination } from '../shared/models/pagination.model';
import { IBrand } from '../shared/models/brand.model';
import { IProductType } from '../shared/models/product-type.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  baseUrl = 'https://localhost:7141/api/';

  constructor(private http: HttpClient) {}

  getProducts(brandId?: number, typeId?: number, sort?: string) {
    let params = new HttpParams();

    if (brandId) {
      params = params.append('brandId', brandId.toString());
    }

    if (typeId) {
      params = params.append('typeId', typeId.toString());
    }

    if (sort) {
      params = params.append('sort', sort);
    }

    return this.http
      .get<IPagination>(this.baseUrl + 'products', {
        observe: 'response',
        params,
      })
      .pipe(
        map((response) => {
          return response.body;
        })
      );
  }

  getBrands() {
    return this.http.get<IBrand[]>(this.baseUrl + 'products/brands');
  }

  getProductTypes() {
    return this.http.get<IProductType[]>(this.baseUrl + 'products/types');
  }
}
