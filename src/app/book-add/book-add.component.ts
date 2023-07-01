import { Component, OnInit } from '@angular/core';
import { Book } from '../models/Book';
import { Category } from '../models/Category';
import { BookCategoriesService } from '../book-categories.service';
import { AvailableBooksService } from '../available-books.service';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit{
  book: Book = new Book();
  categories: Category[];

  constructor(private catService: BookCategoriesService, private bookService: AvailableBooksService){}

  ngOnInit(): void {
      this.catService.getBookCategories()
        .subscribe( res => {
          this.categories = res;
        })
  }

  createBook(){
    this.bookService.createBook(this.book)
  }
}
