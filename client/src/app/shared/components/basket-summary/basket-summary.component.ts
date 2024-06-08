import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BasketItem, IBasket } from '../../models/basket.model';
import { IOrderItem } from '../../models/order.model';

@Component({
  selector: 'app-basket-summary',
  templateUrl: './basket-summary.component.html',
  styleUrls: ['./basket-summary.component.scss'],
})
export class BasketSummaryComponent implements OnInit {
  @Output() decrement: EventEmitter<BasketItem> =
    new EventEmitter<BasketItem>();
  @Output() increment: EventEmitter<BasketItem> =
    new EventEmitter<BasketItem>();
  @Output() remove: EventEmitter<BasketItem> = new EventEmitter<BasketItem>();

  @Input() isBasket = true;
  @Input() items: BasketItem[] | IOrderItem[] = [];
  @Input() isOrder = false;

  ngOnInit(): void {}

  removeBasketItem(item: BasketItem) {
    this.remove.emit(item);
  }

  incrementItemQuantity(item: BasketItem) {
    this.increment.emit(item);
  }

  decrementItemQuantity(item: BasketItem) {
    this.decrement.emit(item);
  }
}
