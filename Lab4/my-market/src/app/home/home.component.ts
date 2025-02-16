import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from '../products/products.component';
import { ProductD } from '../product-d';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProductsComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by name" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-products
        *ngFor="let productD of productList"
        [productD]="productD"
      ></app-products>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  productList: ProductD[] = [
    {
      id: 1,
      name: 'Yamaha CFX',
      photo: '/1.jpeg',
      rating: 4.9,
      descriptions: 'A premium concert grand piano with a rich, resonant tone and powerful projection.',
      url: 'https://kaspi.kz/shop/p/yamaha-cfx'
    },
    {
      id: 2,
      name: 'Steinway Model D',
      photo: '/2.jpeg',
      rating: 5.0,
      descriptions: 'A world-renowned concert grand piano used by top artists for its unparalleled sound.',
      url: 'https://kaspi.kz/shop/p/steinway-model-d'
    },
    {
      id: 3,
      name: 'Kawai GX-2',
      photo: '/3.webp',
      rating: 4.7,
      descriptions: 'A professional grand piano with warm tone and exceptional touch response.',
      url: 'https://kaspi.kz/shop/p/kawai-gx-2'
    },
    {
      id: 4,
      name: 'Bösendorfer 280VC',
      photo: '/4.jpeg',
      rating: 4.8,
      descriptions: 'An Austrian-crafted piano with an extended keyboard and a rich, colorful sound.',
      url: 'https://kaspi.kz/shop/p/bosendorfer-280vc'
    },
    {
      id: 5,
      name: 'Fazioli F308',
      photo: '/5.jpeg',
      rating: 4.9,
      descriptions: 'One of the largest grand pianos with a unique fourth pedal for tonal variations.',
      url: 'https://kaspi.kz/shop/p/fazioli-f308'
    },
    {
      id: 6,
      name: 'Yamaha U1',
      photo: '/6.webp',
      rating: 4.6,
      descriptions: 'A high-quality upright piano with bright tone and responsive action, ideal for professionals.',
      url: 'https://kaspi.kz/shop/p/yamaha-u1'
    },
    {
      id: 7,
      name: 'Steinway Model B',
      photo: '/7.jpeg',
      rating: 4.8,
      descriptions: 'A medium-sized grand piano with a deep bass and sparkling treble.',
      url: 'https://kaspi.kz/shop/p/steinway-model-b'
    },
    {
      id: 8,
      name: 'Kawai K-500',
      photo: '/8.jpeg',
      rating: 4.7,
      descriptions: 'A premium upright piano known for its dynamic range and smooth action.',
      url: 'https://kaspi.kz/shop/p/kawai-k-500'
    },
    {
      id: 9,
      name: 'Casio Privia PX-S7000',
      photo: '/9.jpeg',
      rating: 4.5,
      descriptions: 'A stylish digital piano with advanced sound modeling and a sleek design.',
      url: 'https://kaspi.kz/shop/p/casio-privia-px-s7000'
    },
    {
      id: 10,
      name: 'Roland RD-2000',
      photo: '/10.jpeg',
      rating: 4.6,
      descriptions: 'A professional stage piano with realistic acoustic and electric piano sounds.',
      url: 'https://kaspi.kz/shop/p/roland-rd-2000'
    }
  ];
}
