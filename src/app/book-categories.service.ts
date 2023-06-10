import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookCategoriesService {

  getBookCategories(){
    return of([
      { id: 1, name: 'Adventure' },
      { id: 1, name: 'Crime novel' },
      { id: 1, name: 'Thrillers' },
      { id: 1, name: 'For children' },
    ])
  }
}
