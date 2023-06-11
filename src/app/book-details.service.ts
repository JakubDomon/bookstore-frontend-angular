import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookDetailsService {
  getBookDetails(bookID: number){
    return of(
      { id: 1, title: 'Title1', description: 'desc1', author: 'marian paździoch' }
    )
  }
}
