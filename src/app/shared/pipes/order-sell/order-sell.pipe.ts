import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderSell',
})
export class OrderSellPipe implements PipeTransform {
  transform(list: Object[], params?: string): Object[] {
    if (params.length) {
      return list.sort((a, b) => {
        return a[params] - b[params];
      });
    }
    return list;
  }
}
