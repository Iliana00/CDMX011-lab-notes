import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.services';

@Component({
    selector:'register-root',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent{
    user ={
        email: "",
        password: "", 
        confirmation: ""
      }
      constructor (private auth:AuthService){ }
  ngOnInit(): void {}

  formRegister(value: any){
    //const {emailLogin, passwordLogin} = value

    this.user.email = value.email;
    this.user.password = value.password;
    this.user.confirmation = value.confirmation

    console.log(value)
    console.log(this.user)

    if(this.user.password ==  this.user.confirmation){
        this.auth.sigup(this.user.email, this.user.password).then(()=> 
        window.location.href = '/home',
        )}
   

   
  }
}