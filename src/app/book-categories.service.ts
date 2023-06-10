import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookCategoriesService {

  getBookCategories(){
    return of([
      { id: 1, name: 'Przygodowe' },
      { id: 1, name: 'Kryminalne' },
      { id: 1, name: 'Thrillery' },
      { id: 1, name: 'Test' },
    ])
  }
}
