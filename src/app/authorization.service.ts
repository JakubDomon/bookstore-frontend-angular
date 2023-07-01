import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  logged = false;

  get isLoggedIn(){
    return this.logged;
  }

  get currentUser(){
    return JSON.parse(localStorage.getItem('currentUser') ?? '{}');
  }

  login(login: number, password: string){
    this.httpClient.post(`${environment.apiUrl}authentication/authenticate`, { login: login, password: password })
      .subscribe({
        next: response => {
          localStorage.setItem('currentUser', JSON.stringify(response))
          const modalRef = this.modalService.open(ModalComponent)
          modalRef.componentInstance.message = 'Successfully logged in!'
          this.logged = true;
          this.router.navigate(['/home']);
        },
        error: err => {
          const modalRef = this.modalService.open(ModalComponent)
          modalRef.componentInstance.message = 'Not logged in!'
        }
      })
  }

  register(login: number, firstname: string, lastname: string, password: string){
    this.httpClient.post(`${environment.apiUrl}authentication/register`, { login: login, firstname: firstname, lastname: lastname, password: password })
      .subscribe({
        next: response => {
          const modalRef = this.modalService.open(ModalComponent);
          modalRef.componentInstance.message = 'User created - you can now log in'
        },
        error: response => {
          const modalRef = this.modalService.open(ModalComponent);
          modalRef.componentInstance.message = 'User not created - provide correct data'
        }
      })
  }

  logout(){
    this.logged = false;
    localStorage.removeItem('currentUser');
    this.router.navigate(['/available-books']);
  }

  constructor(private router: Router, private httpClient: HttpClient, private modalService: NgbModal){
    const user = localStorage.getItem('currentUser');
    if(user){
      this.logged = true;
    }
  }
}
