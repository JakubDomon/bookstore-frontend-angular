import { Component, Input } from '@angular/core';
import { Book } from 'src/app/models/Book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  @Input() books: Book[];

  constructor(){ }

  removeReservedBook(book: Book){
    const index = this.books.indexOf(book)
    var bookAfterRemove = this.books.splice(index, 1);

    localStorage.setItem('reservedBooks', JSON.stringify(this.books));
  }
}
