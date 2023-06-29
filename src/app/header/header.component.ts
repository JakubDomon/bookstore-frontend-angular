import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthorizationService } from '../authorization.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  isMenuCollapsed: boolean = true;

  get isLoggedIn(){
    return this.authService.isLoggedIn
  }

  public constructor(private authService: AuthorizationService){}

  onLogoutClicked(){
    this.authService.logout();
  }
}
