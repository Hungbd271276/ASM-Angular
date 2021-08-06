import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../product.service';
import { Iproduct } from '../hello/hellos';
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: Iproduct = {
    id: 0,
    name: '',
    image: '',
    price: 400,
    dec: ''
  }
  constructor(private productSerice: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getInfo()
  }

  getInfo() {
    this.activatedRoute.params.subscribe(params => {
      console.log('params', params);
      this.productSerice.get(params.id).subscribe(data => {
        // this.router.navigateByUrl('/posts')
        this.product = data
      })
    })
  }

  onUpdateProduct() {
    this.productSerice.updateProduct(this.product).subscribe(data => {
      this.router.navigateByUrl('/admin/posts');
    })
  }



}
