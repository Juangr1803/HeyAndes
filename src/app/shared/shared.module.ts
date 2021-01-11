import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Pipes
import { OrderSellPipe } from './pipes/order-sell/order-sell.pipe';
import { OrderPipe } from './pipes/order/order.pipe';
// Componets
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [OrderSellPipe, OrderPipe, HeaderComponent],
  exports: [OrderSellPipe, OrderPipe, HeaderComponent],
  imports: [CommonModule],
})
export class SharedModule {}
