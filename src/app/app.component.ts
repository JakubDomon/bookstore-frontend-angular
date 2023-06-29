import { Component } from '@angular/core';
import { AuthorizationService } from './authorization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'bookstore-frontend';

  get isLoggedIn(){
    return this.authService.isLoggedIn;
  }

  constructor(private authService: AuthorizationService) {}

  onLogout(){
    this.authService.logout();
  }
}
