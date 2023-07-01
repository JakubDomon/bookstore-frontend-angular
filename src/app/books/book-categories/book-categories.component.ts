import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Category } from 'src/app/models/Category';

@Component({
  selector: 'app-book-categories',
  templateUrl: './book-categories.component.html',
  styleUrls: ['./book-categories.component.css']
})
export class BookCategoriesComponent {
  @Input() bookCategories: Category[];

  @Output("emitCategory") choosenCategory = new EventEmitter<number>();

  emitCategory(category: number){
    console.log(category)
    this.choosenCategory.emit(category);
  }
}
