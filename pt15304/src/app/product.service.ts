import { Injectable } from '@angular/core'
import { Iproduct } from './admin/Product/hello/hellos';
import { categorys } from '../app/admin/Category/list-category/category';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // products: Iproduct[] = datafake;
  API: string = 'http://localhost:3000/product';
  API2: string = 'http://localhost:3000/category';

  constructor(private http: HttpClient) { }
  getProducts(): Observable<Iproduct[]> {
    return this.http.get<Iproduct[]>(this.API);
    // return this.products;
  }
  get(id: number): Observable<Iproduct> {
    return this.http.get<Iproduct>(`${this.API}/${id}`);
  }


  addProduct(item: Iproduct): Observable<Iproduct> {
    return this.http.post<Iproduct>(this.API, item);
    // this.products.push(item);
  }

  removeProduct(id: number): Observable<Iproduct> {
    return this.http.delete<Iproduct>(`${this.API}/${id}`);
  }

  updateProduct(product: Iproduct): Observable<Iproduct> {
    return this.http.put<Iproduct>(`${this.API}/${product.id}`, product);
  }

  getCategory(): Observable<Iproduct[]> {
    return this.http.get<Iproduct[]>(this.API2)
  }
  getcate(id: number): Observable<categorys> {
    return this.http.get<categorys>(`${this.API2}/${id}`);
  }

  addCategory(item: categorys): Observable<categorys> {
    return this.http.post<categorys>(this.API2, item)
  }

  removeCategory(id: number): Observable<categorys> {
    return this.http.delete<categorys>(`${this.API2}/${id}`);
  }

  updateCategory(category: categorys): Observable<categorys> {
    return this.http.put<categorys>(`${this.API2}/${category.id}`, category);
  }


}
