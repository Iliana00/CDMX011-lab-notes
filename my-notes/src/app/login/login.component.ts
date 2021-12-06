import { Component } from '@angular/core';
import { AuthService } from 'src/services/auth.services';



@Component({
  selector: 'login-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

 usuario ={
   email: "",
   password: ""
 }

 login(){
   console.log(this.usuario)
 }

}

/* constructor (private auth:AuthService){ }
  ngOnInit(): void {}

  async loginForm(email: string, password: string){
    try{
      await this.auth.login(email, password)
    } 
    catch (e: any){
      console.log('ERRRRRROR')
    }        
  } 
  
  (ngSubmit)="loginForm( email, password)
  
  */
