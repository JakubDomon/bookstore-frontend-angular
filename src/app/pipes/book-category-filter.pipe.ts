import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../models/Book';

@Pipe({
  name: 'bookCategoryFilter'
})
export class BookCategoryFilterPipe implements PipeTransform {

  transform(books: Book[], filter: number): any[] {
    if(books.length === 0 || filter === 0){
      return books;
    }else{
      return books.filter((elem)=>{
        console.log(elem)
        if(filter === 0){
          return books;
        }else{
          return elem.categoryID === filter;
        }
      })
    }
  }

}
