import { Component } from '@angular/core';
import { datafake } from './data-fake';
import { Iproduct } from './admin/Product/hello/hellos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'pt15304';
  // student = {
  //   hoten: 'Bùi Đức Hùng',
  //   gioitinh: 'nam',
  //   ngaysinh: '14/08/2001',
  //   age: 19,
  //   anh: 'anh_nen.jpg',
  // }

  products = datafake

  // product: Iproduct[] = [
  //   {
  //     id: 1,
  //     name: 'bui hùng',
  //     price: 1233,
  //     status: true,
  //     img: 'https://picsum.photos/id/237/200/300'
  //   },
  //   {
  //     id: 2,
  //     name: 'bui hùng 2',
  //     price: 1233,
  //     status: true,
  //     img: 'https://picsum.photos/seed/picsum/200/300'
  //   },
  //   {
  //     id: 3,
  //     name: 'bui hùng 3',
  //     price: 1233,
  //     status: true,
  //     img: 'https://picsum.photos/200/300?grayscale'
  //   },

  // ]

  // addItem(products: Iproduct) {
  //   this.product.push(products);
  //   console.log(this.product)
  // }
}
