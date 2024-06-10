import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
  @ViewChild('search', { static: false }) searchTerm!: ElementRef;
  products?: IProduct[] = [];
  brands: IBrand[] = [];
  productTypes: IProductType[] = [];
  shopParams: ShopParams;
  totalCount!: number;

  sortOptions = [
    { name: 'Alphabetical', value: 'name' },
    { name: 'Price: Low to High', value: 'priceAsc' },
    { name: 'Price: High to Low', value: 'priceDesc' },
  ];

  constructor(private _shopService: ShopService) {
    this.shopParams = this._shopService.getShopParams();
  }

  ngOnInit(): void {
    this.getBrands();
    this.getProductTypes();
    this.getProducts(true);
  }

  getProducts(useCache = false) {
    this._shopService.getProducts(useCache).subscribe(
      (response) => {
        this.products = response?.data;
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
    const params = this._shopService.getShopParams();
    params.brandId = brandId;
    params.pageNumber = 1;
    this._shopService.setShopParams(params);
    this.getProducts();
  }

  onTypeSelected(typeId: number) {
    const params = this._shopService.getShopParams();
    params.typeId = typeId;
    params.pageNumber = 1;
    this._shopService.setShopParams(params);
    this.getProducts();
  }

  onSortSelected(sort: any) {
    const params = this._shopService.getShopParams();
    params.sort = sort.target.value;
    this._shopService.setShopParams(params);
    this.getProducts();
  }

  onPageChanged(event: any) {
    const params = this._shopService.getShopParams();
    if (params.pageNumber !== event) {
      params.pageNumber = event;
      this._shopService.setShopParams(params);
      this.getProducts(true);
    }
  }

  onSearch() {
    const params = this._shopService.getShopParams();
    params.search = this.searchTerm?.nativeElement.value;
    params.pageNumber = 1;
    this._shopService.setShopParams(params);
    this.getProducts();
  }

  onReset() {
    this.searchTerm.nativeElement.value = '';
    this.shopParams = new ShopParams();
    this._shopService.setShopParams(this.shopParams);
    this.getProducts();
  }
}
