import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  logged = false;

  get isLoggedIn(){
    return this.logged;
  }

  login(login: number, password: string){
    this.httpClient.post(`${environment}Authentication/authenticate`, { login: login, password: password })
      .subscribe({
        next: response => {
          this.logged = true;
          this.router.navigate(['/home']);
        },
        error: err => console.log(err)
      })
  }

  logout(){
    this.logged = false;
    this.router.navigate(['/available-books']);
  }

  constructor(private router: Router, private httpClient: HttpClient){}
}
