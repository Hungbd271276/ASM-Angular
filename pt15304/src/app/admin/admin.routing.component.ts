import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { HelloComponent } from './Product/hello/hello.component';
import { HomeComponent } from './home/home.component';
import { ProductAddComponent } from './Product/product-add/product-add.component';
import { ProductEditComponent } from './Product/product-edit/product-edit.component';
import { ProductItemComponent } from './Product/product-item/product-item.component';
import { ListCategoryComponent } from './Category/list-category/list-category.component';
import { CategoryAddComponent } from './Category/category-add/category-add.component';
import { CategoryUpdateComponent } from './Category/category-update/category-update.component';
import { CommonModule } from "@angular/common";
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        children: [
            { path: 'posts', component: HelloComponent },
            { path: 'home', component: HomeComponent },
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'posts/add', component: ProductAddComponent },
            { path: 'posts/:id', component: ProductItemComponent },
            { path: 'posts/:id/edit', component: ProductEditComponent },
            { path: 'category', component: ListCategoryComponent },
            { path: 'category/add', component: CategoryAddComponent },
            { path: 'category/:id/update', component: CategoryUpdateComponent }


        ]
    }

];

@NgModule({
    imports: [BrowserModule, CommonModule, RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }