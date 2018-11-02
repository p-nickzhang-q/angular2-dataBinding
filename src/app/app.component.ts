import { Component } from '@angular/core';
import { PriceQuate } from './price-quate/price-quate.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  stock: string = '';

  priceQuate: PriceQuate = new PriceQuate('', 0);

  priceQuate2: PriceQuate = new PriceQuate('', 0);

  priceQuoteHandler(event: PriceQuate) {
    this.priceQuate = event;
  }

  buyHandler(event: PriceQuate) {
    this.priceQuate2 = event;
  }

}
