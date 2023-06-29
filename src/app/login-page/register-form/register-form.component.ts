import { Component } from '@angular/core';
import { AuthorizationService } from 'src/app/authorization.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {
  login: number;
  fName: string;
  lName: string;
  password: string;

  public constructor(private authService: AuthorizationService) {}

  register(){
    this.authService.register(this.login, this.fName, this.lName, this.password)
  }
}
