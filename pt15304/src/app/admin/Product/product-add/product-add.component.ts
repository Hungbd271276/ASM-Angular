import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Iproduct } from '../hello/hellos';
import { ProductService } from '../../../product.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask, } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore'
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  // @Output() newProductEvent = new EventEmitter<Iproduct>();
 
  product: Iproduct = {
    id: 0,
    name: '',
    image: '',
    price: 400,
    dec: ''
  }
  task: AngularFireUploadTask
  ref: AngularFireStorageReference

  constructor(private productService: ProductService,
    private router: Router,
    private fs: AngularFirestore,
    private af: AngularFireStorage
  ) { }

  ngOnInit(): void {
  }

  onAddProduct() {
  
    this.productService.addProduct(this.product).subscribe(data => {
      this.af.upload("/files" + Math.random() + this.path, this.path);
      this.router.navigateByUrl('/admin/posts');
    });
    console.log(this.path);
  }

  path: string
  onselectFile(event: any) {
    this.path = event.target.files[0];

    // const id = Math.random().toString(36).substring(2);
    // this.ref = this.af.ref(id);
    // this.task = this.ref.put(event.target.files[0])
    // this.task.then((data) => {
    //   data.ref.getDownloadURL().then(url => {
    //      this.fs.collection("users").doc()
    //   })
    // })
  }




}
