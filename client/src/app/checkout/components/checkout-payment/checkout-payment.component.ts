import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BasketService } from '../../../basket/basket.service';
import { CheckoutService } from '../../checkout.service';
import { IBasket } from '../../../shared/models/basket.model';
import { ToastrService } from 'ngx-toastr';
import { IOrder } from '../../../shared/models/order.model';
import { NavigationExtras, Router } from '@angular/router';

declare var Stripe;

@Component({
  selector: 'app-checkout-payment',
  templateUrl: './checkout-payment.component.html',
  styleUrls: ['./checkout-payment.component.scss'],
})
export class CheckoutPaymentComponent implements AfterViewInit, OnDestroy {
  @Input() checkoutForm: FormGroup;
  @ViewChild('cardNumber', { static: true }) cardNumberElement: ElementRef;
  @ViewChild('cardExpiry', { static: true }) cardExpiryElement: ElementRef;
  @ViewChild('cardCvc', { static: true }) cardCvcElement: ElementRef;
  stripe: any;
  cardNumber: any;
  cardExpiry: any;
  cardCvc: any;
  cardErrors: any;
  cardHandler = this.onChange.bind(this);

  constructor(
    private checkoutService: CheckoutService,
    private basketService: BasketService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngAfterViewInit(): void {
    this.stripe = Stripe(
      'pk_test_51PPXeYGMaABA3TuUmyimh0hxN5K3kv9BycD5yLrKQ2gh3xq2EMXmdv2CLvXoOIBt8hiMsb5oiT9NSqIurUFxbgt60040k8BfK3'
    );
    const elements = this.stripe.elements();

    this.cardNumber = elements.create('cardNumber');
    this.cardNumber.mount(this.cardNumberElement.nativeElement);
    this.cardNumber.addEventListener('change', this.cardHandler);

    this.cardExpiry = elements.create('cardExpiry');
    this.cardExpiry.mount(this.cardExpiryElement.nativeElement);
    this.cardExpiry.addEventListener('change', this.cardHandler);

    this.cardCvc = elements.create('cardCvc');
    this.cardCvc.mount(this.cardCvcElement.nativeElement);
    this.cardCvc.addEventListener('change', this.cardHandler);
  }

  ngOnDestroy(): void {
    this.cardNumber.destroy();
    this.cardExpiry.destroy();
    this.cardCvc.destroy();
  }

  onChange({ error }) {
    if (error) {
      this.cardErrors = error.message;
    } else {
      this.cardErrors = null;
    }
  }

  submitOrder() {
    const basket = this.basketService.getCurrentBasketValue();
    const orderToCreate = this.getOrderToCreate(basket);
    this.checkoutService.createOrder(orderToCreate).subscribe(
      (order: IOrder) => {
        this.toastr.success('Order created successfully');
        this.stripe
          .confirmCardPayment(basket.clientSecret, {
            payment_method: {
              card: this.cardNumber,
              billing_details: {
                name: this.checkoutForm.get('paymentForm').get('nameOnCard')
                  .value,
              },
            },
          })
          .then((result) => {
            if (result.paymentIntent) {
              this.basketService.deleteLocalBasket(basket.id);
              const navigationExtras: NavigationExtras = { state: order };
              this.router.navigate(['checkout/success'], navigationExtras);
            } else {
              this.toastr.error('Payment error');
            }
          });
      },
      (error) => {
        this.toastr.success(error.message);
      }
    );
  }

  private getOrderToCreate(basket: IBasket) {
    return {
      basketId: basket.id,
      deliveryMethodId: +this.checkoutForm
        .get('deliveryForm')
        .get('deliveryMethod').value,
      shipToAddress: this.checkoutForm.get('addressForm').value,
    };
  }
}
