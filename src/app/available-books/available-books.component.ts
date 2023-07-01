import { Component, Input, OnInit } from '@angular/core';
import { AvailableBooksService } from '../available-books.service';
import { BookCategoriesService } from '../book-categories.service';
import { fadeIn } from '../animations/fadeIn';
import { fadeOut } from '../animations/fadeOut';
import { Book } from '../models/Book';
import { Category } from '../models/Category';
import { AuthorizationService } from '../authorization.service';

@Component({
  selector: 'app-available-books',
  templateUrl: './available-books.component.html',
  styleUrls: ['./available-books.component.css'],
  animations: [fadeIn, fadeOut],
})
export class AvailableBooksComponent implements OnInit{
  availableBooks: Book[] = [];
  bookCategories: Category[] = [];

  // Filters
  categoryFilter: number = 0;

  constructor(private availableBooksService: AvailableBooksService, private bookCategoriesService: BookCategoriesService, private authServ: AuthorizationService){}

  get isLoggedIn(){
    return this.authServ.isLoggedIn
  }

  ngOnInit(): void {
    // Available books
    this.availableBooksService
      .getAvailableBooks()
      .subscribe({
        next: books => this.availableBooks = books
      })
    // Book categories
    this.bookCategoriesService
      .getBookCategories()
      .subscribe({
        next: categories => this.bookCategories = categories
      })
  }

  assignCategory(category: number){
    this.categoryFilter = category;
  }

  reserveBook(book: Book){
    var reservedBooks = localStorage.getItem('reservedBooks')
    console.log(reservedBooks)
    if(reservedBooks === null){
      var resBooks: Book[] = [];
      resBooks.push(book);
      localStorage.setItem('reservedBooks', JSON.stringify(reservedBooks))
    }

    var retString: string = localStorage.getItem('reservedBooks')!;
    var resBooks: Book[] = JSON.parse(retString);
    resBooks.push(book)

    localStorage.setItem('reservedBooks', JSON.stringify(resBooks));

    console.log(resBooks)
  }
}
