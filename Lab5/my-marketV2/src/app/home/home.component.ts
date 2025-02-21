import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from '../products/products.component';
import { ProductD } from '../product-d';
import { ProductService } from '../piano.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProductsComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by name" #filter />
        <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
      </form>
    </section>
    <section class="results">
      <app-products
        *ngFor="let productD of filteredProductList"
        [productD]="productD"
      ></app-products>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  productList: ProductD[] = [];
  filteredProductList: ProductD[] = [];
  productService: ProductService = inject(ProductService);

  constructor() {
    this.productList = this.productService.getAllProducts();
    this.filteredProductList = this.productList;
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredProductList = this.productList;
      return;
    }
    this.filteredProductList = this.productList.filter((product) =>
      product?.name.toLowerCase().includes(text.toLowerCase())
    );
  }
}
