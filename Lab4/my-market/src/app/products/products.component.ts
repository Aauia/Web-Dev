import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductD } from '../product-d';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  template: `
<a class = "link" [href]="productD.url" target="_blank">
  <section class="listing">
    <!-- Image -->
    <img class="listing-photo" [src]="productD.photo" alt="{{ productD.name }}" />

    <!-- Name -->
    <h2 class="listing-heading">{{ productD.name }}</h2>

    <!-- Rating -->
    <p class="listing-location">
      Rating: {{ productD.rating }}
    </p>

    <!-- Description -->
    <p class="listing-description">{{ productD.descriptions }}</p>

    <!-- Share Button -->
    <div class="share-button">
      <a [href]="getTelegramShareUrl(productD.url)" target="_blank">
        <img src="/share.png" alt="Share on Telegram" class="share-icon" />
      </a>
    </div>
  </section>
</a>

  `,
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  @Input() productD!: ProductD;

  // Generate Telegram share link
  getTelegramShareUrl(url: string): string {
    return `https://t.me/share/url?url=${encodeURIComponent(url)}`;
  }
}
