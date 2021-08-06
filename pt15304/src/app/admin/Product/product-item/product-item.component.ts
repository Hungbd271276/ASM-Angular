import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from '../hello/hellos';
import { ProductService } from '../../../product.service';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  products: Iproduct = {
    id: 0,
    name: '',
    image: '',
    price: 400,
    dec: ''
  }
  constructor(private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.getProduct();
  }
  getProduct() {
    this.activatedRoute.params.subscribe(params => {
      console.log('params', params);
      this.productService.get(params.id).subscribe(data => {
        this.products = data;

      })
    })
  }






}
