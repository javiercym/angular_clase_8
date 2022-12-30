import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username!: string;
  password!: string;
  array=['Home','Support','Contac'];
  showArray = false;
  mensajeError = 'Credenciales incorrectas, intentelo nuevamente.';
  esError= false;

  validateLogin(){
    if (this.username ==='Angular' && this.password ==='123456') {
      this.showArray = true;
    }else{
      this.esError = true;
    }
  }



}
