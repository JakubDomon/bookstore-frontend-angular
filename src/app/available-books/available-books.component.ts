import { Component, OnInit } from '@angular/core';
import { AvailableBooksService } from '../available-books.service';

@Component({
  selector: 'app-available-books',
  templateUrl: './available-books.component.html',
  styleUrls: ['./available-books.component.css']
})
export class AvailableBooksComponent implements OnInit{
  availableBooks: any[] = [];

  constructor(private availableBooksService: AvailableBooksService){}

  ngOnInit(): void {
      this.availableBooksService
      .getAvailableBooks()
      .subscribe({
        next: books => this.availableBooks = books
      })
  }

  bookCategories = [
    { id: 1, name: 'Przygodowe' },
    { id: 1, name: 'Kryminalne' },
    { id: 1, name: 'Thrillery' },
    { id: 1, name: 'Test' },
  ]


}
