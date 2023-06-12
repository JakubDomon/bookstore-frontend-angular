import { Component, OnInit } from '@angular/core';
import { BookOpinionsService } from 'src/app/book-opinions.service';

@Component({
  selector: 'app-book-opinions',
  templateUrl: './book-opinions.component.html',
  styleUrls: ['./book-opinions.component.css']
})
export class BookOpinionsComponent implements OnInit{
  bookOpinions: any[] = [];

  constructor(private bookOpinionsService: BookOpinionsService){}

  ngOnInit(): void {
    this.bookOpinionsService
      .getBookOpinions(1)
      .subscribe({
        next: opinions => this.bookOpinions = opinions
      })
  }

}
