import { Component } from '@angular/core';
import { AuthorizationService } from 'src/app/authorization.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  login: number;
  password: string;

  constructor(private authService: AuthorizationService) {}

  loginUser(){
    this.authService.login(this.login, this.password);
  }
}
