import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../product.service';
import { categorys } from './category';
@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {
  category: categorys[]
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getCategory();
  }

  getCategory() {
    this.productService.getCategory().subscribe(data => {
        this.category = data

    })
  }
  onHandleRemove(id: number) {
    this.productService.removeCategory(id).subscribe(data => {
      this.getCategory();
    })
  }

}
