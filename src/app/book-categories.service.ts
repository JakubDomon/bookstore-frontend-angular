import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from './models/Category';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';

@Injectable({
  providedIn: 'root'
})
export class BookCategoriesService {

  constructor(private httpClient: HttpClient, private modalService: NgbModal){}

  getBookCategories() : Observable<Category[]>{
    return this.httpClient.get<Category[]>(`${environment.apiUrl}category`)
  }

  createCategory(category: Category){
    this.httpClient.post(`${environment.apiUrl}category`, category)
      .subscribe({
        next: res => {
          const modalRef = this.modalService.open(ModalComponent);
          modalRef.componentInstance.message = `Category ${category.name} added!`;
        },
        error: res => {
          const modalRef = this.modalService.open(ModalComponent);
          modalRef.componentInstance.message = `Category not added`
        }
      })
  }
}
