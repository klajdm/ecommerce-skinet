import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../shared/models/product.model';
import { ShopService } from '../shop.service';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  product?: IProduct;
  productId!: number;

  constructor(
    private _shopService: ShopService,
    private _activateRoute: ActivatedRoute,
    private _bcService: BreadcrumbService
  ) {
    this._bcService.set('@productDetails', ' ');
  }

  ngOnInit(): void {
    this.productId = Number(this._activateRoute.snapshot.paramMap.get('id'));
    this.getProductById();
  }

  getProductById() {
    this._shopService.getProduct(this.productId).subscribe(
      (response) => {
        this.product = response;
        this._bcService.set('@productDetails', this.product?.name);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
