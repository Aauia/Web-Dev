import { Component, OnInit } from '@angular/core';
import { ProductService } from '../piano.service';
import { CategoryD } from '../category-d';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-category',
  standalone: true, 
  imports: [CommonModule, RouterModule],
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: CategoryD[] = [];
  loaded: boolean = false;


  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.loaded = false;
    this.productService.getAllCategories().subscribe(categories => {
      this.categories = categories;
      this.loaded = true;
    });
  }

}
