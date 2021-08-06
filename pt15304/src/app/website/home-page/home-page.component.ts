import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../../admin/Product/hello/hellos';
import { ProductService } from '../../product.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private productService: ProductService) { }
  products: Iproduct[];
  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
      console.log(data);
    })
  }

}
