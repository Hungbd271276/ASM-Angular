import { Component, OnInit, Input } from '@angular/core';
import { Iproduct } from './hellos';
import { ProductService } from '../../../product.service';
@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  products: Iproduct[]

  detail: Iproduct = {
    id: 0,
    name: '',
    image: '',
    price: 400,
    dec: ''

  }

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }



  // onhandleChangeStatus() {
  //   // return this.product.filter((products: Iproduct) =>
  //   //   products.status = !products.status
  //   // )
  // }


  // onHandleChangeName(e: any) {
  //   return this.product.find((products: Iproduct) =>
  //     products.name = e.target.value

  //   )
  // }

  onDetail(item: Iproduct) {
    // console.log(item);
    this.detail = item;
  }
  onHandleRemove(id: number) {
    //this.products = this.products.filter(item => item.id !== id);
    // console.log(this.productService.removeProduct(id))

    this.productService.removeProduct(id).subscribe(data => {
      // this.products = this.products.filter(item => item.id !== data.id);
      this.getProducts();
    });

  }


  getProducts() {
    // this.products = this.productService.getProducts();
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    })
  }



}
