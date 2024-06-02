import { Component, OnInit } from '@angular/core';
import { IProduct } from '../shared/models/product.model';
import { ShopService } from './shop.service';
import { IBrand } from '../shared/models/brand.model';
import { IProductType } from '../shared/models/product-type.model';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  products?: IProduct[] = [];
  brands: IBrand[] = [];
  productTypes: IProductType[] = [];
  brandIdSelected = 0;
  typeIdSelected = 0;
  sortSelected = 'name';
  sortOptions = [
    { name: 'Alphabetical', value: 'name' },
    { name: 'Price: Low to High', value: 'priceAsc' },
    { name: 'Price: High to Low', value: 'priceDesc' },
  ];

  constructor(private _shopService: ShopService) {}

  ngOnInit(): void {
    this.getBrands();
    this.getProductTypes();
    this.getProducts();
  }

  getProducts() {
    this._shopService
      .getProducts(this.brandIdSelected, this.typeIdSelected, this.sortSelected)
      .subscribe(
        (response) => {
          this.products = response?.data;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  getBrands() {
    this._shopService.getBrands().subscribe(
      (response) => {
        this.brands = [{ id: 0, name: 'All' }, ...response];
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getProductTypes() {
    this._shopService.getProductTypes().subscribe(
      (response) => {
        this.productTypes = [{ id: 0, name: 'All' }, ...response];
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onBrandSelected(brandId: number) {
    this.brandIdSelected = brandId;
    this.getProducts();
  }

  onTypeSelected(typeId: number) {
    this.typeIdSelected = typeId;
    this.getProducts();
  }

  onSortSelected(sort: any) {
    this.sortSelected = sort.target.value;
    this.getProducts();
  }
}
