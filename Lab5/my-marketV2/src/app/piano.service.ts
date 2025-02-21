import { Injectable } from '@angular/core';
import { ProductD } from './product-d';
import { Observable, of } from 'rxjs'
import { CategoryD } from './category-d';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private categories: CategoryD[] = [
    { id: 1, name: 'Grand Pianos' },
    { id: 2, name: 'Upright Pianos' },
    { id: 3, name: 'Classical Pianos' },
    { id: 4, name: 'Synthezators'}
    ]
  private productList: ProductD[] = [
    {
      id: 1,
      name: 'Yamaha CFX',
      photo: '/1.jpeg',
      rating: 4.9,
      descriptions: 'A premium concert grand piano with a rich, resonant tone and powerful projection.',
      url: 'https://kaspi.kz/shop/p/rojal-yamaha-clp-765gp-banketka-109189101/?c=750000000',
      like:216,
      categoryId:1
    },
    {
      id: 2,
      name: 'Steinway Model D',
      photo: '/2.jpeg',
      rating: 5.0,
      descriptions: 'A world-renowned concert grand piano used by top artists for its unparalleled sound.',
      url: 'https://kaspi.kz/shop/p/rojal-kurzweil-kag100-14300186/?c=750000000',
      like:241,
      categoryId:1
    },
    {
      id: 3,
      name: 'Kawai GX-2',
      photo: '/3.webp',
      rating: 4.7,
      descriptions: 'A professional grand piano with warm tone and exceptional touch response.',
      url: 'https://kaspi.kz/shop/p/rojal-kurzweil-kag100-14300186/?c=750000000',
      like:277,
      categoryId:1
    },
    {
      id: 4,
      name: 'Bösendorfer 280VC',
      photo: '/4.jpeg',
      rating: 4.8,
      descriptions: 'An Austrian-crafted piano with an extended keyboard and a rich, colorful sound.',
      url: 'https://kaspi.kz/shop/p/rojal-kurzweil-kag100-14300186/?c=750000000',
      like:398,
      categoryId:2
    },
    {
      id: 5,
      name: 'Fazioli F308',
      photo: '/5.jpeg',
      rating: 4.9,
      descriptions: 'One of the largest grand pianos with a unique fourth pedal for tonal variations.',
      url: 'https://kaspi.kz/shop/p/rojal-kurzweil-kag100-14300186/?c=750000000',
      like:354,
      categoryId:2
    },
    {
      id: 6,
      name: 'Yamaha U1',
      photo: '/6.webp',
      rating: 4.6,
      descriptions: 'A high-quality upright piano with bright tone and responsive action, ideal for professionals.',
      url: 'https://kaspi.kz/shop/p/rojal-kurzweil-kag100-14300186/?c=750000000',
      like:231,
      categoryId:3
    },
    {
      id: 7,
      name: 'Steinway Model B',
      photo: '/7.jpeg',
      rating: 4.8,
      descriptions: 'A medium-sized grand piano with a deep bass and sparkling treble.',
      url: 'https://kaspi.kz/shop/p/rojal-kurzweil-kag100-14300186/?c=750000000',
      like:200,
      categoryId:2
    },
    {
      id: 8,
      name: 'Kawai K-500',
      photo: '/8.jpeg',
      rating: 4.7,
      descriptions: 'A premium upright piano known for its dynamic range and smooth action.',
      url: 'https://kaspi.kz/shop/p/rojal-kurzweil-kag100-14300186/?c=750000000',
      like:102,
      categoryId:3
    },
    {
      id: 9,
      name: 'Casio Privia PX-S7000',
      photo: '/9.jpeg',
      rating: 4.5,
      descriptions: 'A stylish digital piano with advanced sound modeling and a sleek design.',
      url: 'https://kaspi.kz/shop/p/rojal-kurzweil-kag100-14300186/?c=750000000',
      like:123,
      categoryId:4
    },
    {
      id: 10,
      name: 'Roland RD-2000',
      photo: '/10.jpeg',
      rating: 4.6,
      descriptions: 'A professional stage piano with realistic acoustic and electric piano sounds.',
      url: 'https://kaspi.kz/shop/p/rojal-kurzweil-kag100-14300186/?c=750000000',
      like:154,
      categoryId:4
    }
  ];

  getAllProducts(): ProductD[] {
    return this.productList;
  }
  getAllCategories(): Observable<CategoryD[]> {
    return of(this.categories);
  }

  getProductById(id: number): ProductD | undefined {
    return this.productList.find((product) => product.id === id);
  }
  getAllProductsCategory(): Observable<ProductD[]> {
    return of(this.productList);
  }

  getProductsByCategory(id: number): Observable<ProductD[]> {
    return of(this.productList.filter((product) => product.categoryId === id));
  }
}
  

