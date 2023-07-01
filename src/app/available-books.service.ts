import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from './models/Book';
import { environment } from 'src/environments/environment';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AvailableBooksService {

  getAvailableBooks() : Observable<Book[]>{
    return this.httpClient.get<Book[]>(`${environment.apiUrl}book`);
  }

  createBook(book: Book){
    this.httpClient.post(`${environment.apiUrl}book`, book)
      .subscribe({
        next: res => {
          const modalRef = this.modalService.open(ModalComponent);
          modalRef.componentInstance.message = `Book ${book.title} created!`
          this.router.navigate(['/available-books'])
        },
        error: res =>{
          const modalRef = this.modalService.open(ModalComponent);
          modalRef.componentInstance.message = `Book not created!`
        }
      })
  }

  constructor(private httpClient: HttpClient, private router:Router, private modalService: NgbModal) { }
}
