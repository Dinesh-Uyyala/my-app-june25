import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isVisible:Boolean=false;
  visible(){
    this.isVisible=!this.isVisible;
  }
}
