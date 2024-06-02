import { Component, OnInit } from '@angular/core';
import { IProduct } from '../shared/models/product.model';
import { ShopService } from './shop.service';
import { IBrand } from '../shared/models/brand.model';
import { IProductType } from '../shared/models/product-type.model';
import { ShopParams } from '../shared/models/shop-params.model';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  products?: IProduct[] = [];
  brands: IBrand[] = [];
  productTypes: IProductType[] = [];
  shopParams = new ShopParams();
  totalCount!: number;

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
    this._shopService.getProducts(this.shopParams).subscribe(
      (response) => {
        this.products = response?.data;
        this.shopParams.pageNumber = Number(response?.pageIndex);
        this.shopParams.pageSize = Number(response?.pageSize);
        this.totalCount = Number(response?.count);
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
    this.shopParams.brandId = brandId;
    this.getProducts();
  }

  onTypeSelected(typeId: number) {
    this.shopParams.typeId = typeId;
    this.getProducts();
  }

  onSortSelected(sort: any) {
    this.shopParams.sort = sort.target.value;
    this.getProducts();
  }

  onPageChanged(event: any) {
    this.shopParams.pageNumber = event;
    this.getProducts();
  }
}
