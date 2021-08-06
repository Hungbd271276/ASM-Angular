import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../product.service';
import { categorys } from '../list-category/category';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.css']
})
export class CategoryUpdateComponent implements OnInit {
  category: categorys = {
    id: 0,
    name: ''
  }
  constructor(private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.getInfo()
  }

  getInfo() {
    this.activatedRoute.params.subscribe(params => {
      this.productService.getcate(params.id).subscribe(data => {
       this.category = data;
      })
    })
  }

  onUpdateCategory() {
    this.productService.updateCategory(this.category).subscribe(data => {
      this.router.navigateByUrl('admin/category')

    })
  }

}
