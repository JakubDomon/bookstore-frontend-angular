import { Component, OnInit } from '@angular/core';
import { BookDetailsService } from 'src/app/book-details.service';
import { Book } from 'src/app/models/Book';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit{
  book: Book

  constructor(private BookDetailsService: BookDetailsService){};

  ngOnInit(): void {
    // Book details
    this.BookDetailsService
    .getBookDetails(1)
    .subscribe({
      next: book => {
        this.book = book
      }
    })
  }

}
