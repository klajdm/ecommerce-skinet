import { Component, OnInit } from '@angular/core';
import { IProduct } from '../shared/models/product.model';
import { ShopService } from './shop.service';
import { IBrand } from '../shared/models/brand.model';
import { IProductType } from '../shared/models/product-type.model';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  products: IProduct[]=[];
  brands: IBrand[]=[];
  productTypes: IProductType[]=[];

  constructor(private _shopService: ShopService){}

  ngOnInit(): void {
    this.getBrands();
    this.getProductTypes();
    this.getProducts();
  }

  getProducts(){
    this._shopService.getProducts().subscribe(response => {
      this.products = response.data;
    }, error => {
      console.log(error);
    });
  }

  getBrands(){
    this._shopService.getBrands().subscribe(response => {
      this.brands = response;
    }, error => {
      console.log(error);
    });
  }

  getProductTypes(){
    this._shopService.getProductTypes().subscribe(response => {
      this.productTypes = response;
    }, error => {
      console.log(error);
    });
  }
}
