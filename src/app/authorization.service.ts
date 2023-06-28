import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  logged = false;

  get isLoggedIn(){
    return this.logged;
  }

  logout(){
    this.logged = false;
  }

  constructor(){}
}
