import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-my-bought-books',
  templateUrl: './my-bought-books.component.html',
  styleUrls: ['./my-bought-books.component.css']
})
export class MyBoughtBooksComponent implements OnInit{
  books: any = [];

  public ngOnInit(): void {
      var booksObject = localStorage.getItem("reservedBooks")
      if(booksObject !== null){
        this.books = JSON.parse(booksObject);
      }else{
        this.books = [];
      }

      console.log(this.books)
  }
}
