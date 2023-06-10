import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookDetailsService {
  getBookDetails(bookID: number){
    return of([
      { id: 1, title: 'Title1', description: 'desc1', author: 'marian paździoch', opinions: [
        {id: 1, author: 'ferdynand kiepski', text: 'asasdasdasdasdasdasdasd'}
      ]},
      { id: 2, title: 'Title2', description: 'desc2', author: 'marian paździoch2', opinions: [
        {id: 1, author: 'ferdynand kiepski', text: 'asasdasdasdasdasdasdasd'}
      ]},
      { id: 3, title: 'Title3', description: 'desc3', author: 'marian paździoch3', opinions: [
        {id: 1, author: 'ferdynand kiepski', text: 'asasdasdasdasdasdasdasd'}
      ]},
    ])
  }
}
