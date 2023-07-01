import { Component } from '@angular/core';
import { Category } from '../models/Category';
import { BookCategoriesService } from '../book-categories.service';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent {
  category: Category;

  constructor(private categoryService: BookCategoriesService){
    this.category = new Category();
  }

  createCategory(){
    this.categoryService.createCategory(this.category);
  }
}
