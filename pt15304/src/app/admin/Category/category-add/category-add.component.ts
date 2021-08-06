import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../product.service';
import { Router } from '@angular/router';
import { categorys } from '../list-category/category'

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {
  category: categorys = {
    id: 0,
    name: ''
  }
  constructor(private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }


  onAddCategory() {
    this.productService.addCategory(this.category).subscribe(data => {
      this.router.navigateByUrl('admin/category')
    })
  }

}
