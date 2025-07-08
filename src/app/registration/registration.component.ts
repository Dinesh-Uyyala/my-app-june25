import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  public registrationForm:FormGroup=new FormGroup({
    name:new FormControl(),
    email:new FormControl(),
    mobile:new FormControl(),
    password:new FormControl()
  })
constructor(private _registrationService:RegistrationService,private _router:Router){}
  register(){
    console.log(this.registrationForm.value);
    this._registrationService.userRegistration(this.registrationForm.value).subscribe(
      (data:any)=>{
        alert("Registration Successful!");
        this._router.navigateByUrl("/");
      },(err:any)=>{
        alert("Internal Server Error");
      }
    )
  }
}
