import { Component, OnInit } from '@angular/core';
import { IProduct } from '../shared/models/product.model';
import { ShopService } from './shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  products: IProduct[]=[];

  constructor(private _shopService: ShopService){}

  ngOnInit(): void {
    this._shopService.getProducts().subscribe(response => {
      this.products = response.data
    }, error => {
      console.log(error);
    });
  }

}
