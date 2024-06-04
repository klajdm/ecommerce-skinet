import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../shared/models/product.model';
import { ShopService } from '../shop.service';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'xng-breadcrumb';
import { BasketService } from '../../basket/basket.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  product?: IProduct;
  productId!: number;
  quantity = 1;

  constructor(
    private _shopService: ShopService,
    private _activateRoute: ActivatedRoute,
    private _bcService: BreadcrumbService,
    private _basketService: BasketService
  ) {
    this._bcService.set('@productDetails', ' ');
  }

  ngOnInit(): void {
    this.productId = Number(this._activateRoute.snapshot.paramMap.get('id'));
    this.getProductById();
  }

  addItemToBasket() {
    this._basketService.addItemToBasket(this.product, this.quantity);
  }

  incrementQuantity() {
    this.quantity++;
  }

  decrementQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
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
