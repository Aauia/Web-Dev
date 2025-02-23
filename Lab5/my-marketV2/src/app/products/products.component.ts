import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductD } from '../product-d';
import {RouterModule} from '@angular/router';
import {ProductService} from '../piano.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent  implements OnInit {
  @Input() productD!: ProductD;
  products!: ProductD[];
  loaded: boolean = false;
  categoryId!: number;
  isLiked: Boolean = false;
  constructor(private route: ActivatedRoute, private productService: ProductService) {
    this.loaded = false;
  }

  
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.categoryId = Number(params.get('id'));

      this.loaded = false;
      this.productService.getProductsByCategory(this.categoryId).subscribe((products: ProductD[]) => {
        this.products = products;
        this.loaded = true;
      });


    });
  }

    getTelegramShareUrl(url: string): string {
       return `https://t.me/share/url?url=${encodeURIComponent(url)}`
    }
  
  
    toggleLike(event: Event) {
      event.stopPropagation(); // Prevents accidental navigation
  
      this.isLiked = !this.isLiked;
      this.isLiked ? this.productD.like++ : this.productD.like--;
    }

}
