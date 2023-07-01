import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Category } from './models/Category';
import { Opinion } from './models/Opinion';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Book } from './models/Book';

@Injectable({
  providedIn: 'root'
})
export class BookDetailsService {

  constructor(private httpClient: HttpClient){}

  getBookDetails(bookID: number): any{
    return this.httpClient.get<Book>(`${environment.apiUrl}book/${bookID}`)
  }
}
