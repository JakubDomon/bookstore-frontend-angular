import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bookCategoryFilter'
})
export class BookCategoryFilterPipe implements PipeTransform {

  transform(books: any[], filterText: string): any[] {
    if(books.length === 0 || filterText === ''){
      return books;
    }else{
      return books.filter((elem)=>{
        if(filterText === 'all'){
          return books;
        }else{
          return elem.category.toLowerCase() === filterText.toLowerCase();
        }
      })
    }
  }

}
