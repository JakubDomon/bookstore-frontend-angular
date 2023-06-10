import { Component, OnInit } from '@angular/core';
import { AvailableBooksService } from '../available-books.service';
import { BookCategoriesService } from '../book-categories.service';

@Component({
  selector: 'app-available-books',
  templateUrl: './available-books.component.html',
  styleUrls: ['./available-books.component.css']
})
export class AvailableBooksComponent implements OnInit{
  availableBooks: any[] = [];
  bookCategories: any[] = [];

  constructor(private availableBooksService: AvailableBooksService, private bookCategoriesService: BookCategoriesService){}

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
}
