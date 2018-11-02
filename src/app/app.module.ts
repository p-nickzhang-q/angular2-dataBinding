import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BindComponent } from './bind/bind.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MultiplePipe } from './pipe/multiple.pipe';
import { OrderComponent } from './order/order.component';
import { PriceQuateComponent } from './price-quate/price-quate.component';

@NgModule({
  declarations: [
    AppComponent,
    BindComponent,
    MultiplePipe,
    OrderComponent,
    PriceQuateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
