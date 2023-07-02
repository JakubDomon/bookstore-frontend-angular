import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookDetailsService } from 'src/app/book-details.service';
import { Book } from 'src/app/models/Book';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit{
  book: Book

  constructor(private BookDetailsService: BookDetailsService, private route: ActivatedRoute){};

  ngOnInit(): void {
    this.route.params.subscribe(p => {
      var id = +p['id']

      // Book details
      this.BookDetailsService
      .getBookDetails(id)
      .subscribe({
        next: book => {
          this.book = book
        }
      })
    })
  }

}
