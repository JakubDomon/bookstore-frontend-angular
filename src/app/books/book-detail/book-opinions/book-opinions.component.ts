import { Component, OnInit } from '@angular/core';
import { BookOpinionsService } from 'src/app/book-opinions.service';
import { Opinion } from 'src/app/models/Opinion';

@Component({
  selector: 'app-book-opinions',
  templateUrl: './book-opinions.component.html',
  styleUrls: ['./book-opinions.component.css']
})
export class BookOpinionsComponent implements OnInit{
  bookOpinions: Opinion[] = [];

  constructor(private bookOpinionsService: BookOpinionsService){}

  ngOnInit(): void {
    this.bookOpinionsService
      .getBookOpinions(1)
      .subscribe({
        next: opinions => this.bookOpinions = opinions
      })
  }

}
