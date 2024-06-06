import { Component, OnInit } from '@angular/core';
import { BasketService } from './basket/basket.service';
import { AccountService } from './account/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private basketService: BasketService,
    private accountService: AccountService
  ) {}

  ngOnInit(): void {
    this.loadBasket();
    this.loadCurrentUser();
  }

  loadCurrentUser() {
    const token = localStorage.getItem('token');
    this.accountService.loadCurrentUser(token).subscribe(
      () => {
        console.log('loaded user');
      },
      (error) => {
        console.log(error);
      }
    );
  }

  loadBasket() {
    const baskedId = localStorage.getItem('basked_id');
    if (baskedId) {
      this.basketService.getBasket(baskedId).subscribe(
        () => {
          console.log('initialized basked');
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
