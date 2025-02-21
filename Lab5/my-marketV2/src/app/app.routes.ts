import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProductsComponent} from './products/products.component';
import {ProductListComponent} from './product-list/product-list.component';
import {CategoryComponent} from './category/category.component';


export const routes: Routes = [
  {path: 'home', component: HomeComponent, title: 'Home page'},
  { path: 'categories', component: CategoryComponent },
  { path: 'products/category/:id', component: ProductListComponent },
  { path: 'products/:id', component: ProductsComponent }
];