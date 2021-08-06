import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  // { path: 'posts', component: HelloComponent },
  // { path: 'home', component: HomeComponent },
  // { path: 'posts/add', component: ProductAddComponent },
  // { path: 'posts/:id', component: ProductItemComponent },
  // { path: 'posts/:id/edit', component: ProductEditComponent },
  // { path: '', redirectTo: 'posts', pathMatch: 'full' },
  // { path: "**", component: NotFoundComponent }
  //  { path: '', component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    BrowserModule, CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
