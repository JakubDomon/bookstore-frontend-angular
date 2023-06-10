import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-book-categories',
  templateUrl: './book-categories.component.html',
  styleUrls: ['./book-categories.component.css']
})
export class BookCategoriesComponent {
  @Input() bookCategories: any;

  @Output("emitCategory") choosenCategory = new EventEmitter<string>();

  emitCategory(category: string){
    this.choosenCategory.emit(category);
  }
}
