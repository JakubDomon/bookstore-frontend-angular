import { HttpClient } from '@angular/common/http';
import { NotExpr } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Reservation } from './models/Reservation';
import { ModalComponent } from './modal/modal.component';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class ReservationsServiceService {

  constructor(private httpCLient: HttpClient, private modalService: NgbModal) { }

  getLastReservations(){
    return this.httpCLient.get<Reservation[]>(`${environment.apiUrl}reservation/my`)
  }

  saveReservation(reservation: Reservation){
    this.httpCLient.post(`${environment.apiUrl}reservation`, reservation)
      .subscribe({
        next: res => {
          const modalRef = this.modalService.open(ModalComponent);
          modalRef.componentInstance.message = `Reservation added!`;
        },
        error: res => {
          const modalRef = this.modalService.open(ModalComponent);
          modalRef.componentInstance.message = `Reservation not added!`;
        }
      })
  }
}
