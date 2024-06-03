import { Component, OnInit } from '@angular/core';
import { BasketService } from './basket/basket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private basketService: BasketService) {}

  ngOnInit(): void {
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
