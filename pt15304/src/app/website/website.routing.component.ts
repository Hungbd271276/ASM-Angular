import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from "@angular/common";
import { BrowserModule } from '@angular/platform-browser';
import { HomePageComponent } from './home-page/home-page.component';


const routes: Routes = [
    { path: '', component: HomePageComponent }
];

@NgModule({
    imports: [BrowserModule, CommonModule, RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class WebsiteRoutingModule { }
