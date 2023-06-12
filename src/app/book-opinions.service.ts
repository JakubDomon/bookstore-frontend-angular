import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookOpinionsService {

  getBookOpinions(bookId: number){
    return of([
      { id: 1, author: 'Jakub Domoń', text: 'asdadsasdadsasd', rating: 4 },
      { id: 1, author: 'Jakub Domoń', text: 'asdadsasdadsasd', rating: 4 },
      { id: 1, author: 'Jakub Domoń', text: 'asdadsasdadsasd', rating: 4 },
      { id: 1, author: 'Jakub Domoń', text: 'asdadsasdadsasd', rating: 4 },
      { id: 1, author: 'Jakub Domoń', text: 'asdadsasdadsasd', rating: 4 },
      { id: 1, author: 'Jakub Domoń', text: 'asdadsasdadsasd', rating: 4 },
    ])
  }
}
