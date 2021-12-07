import { Component } from '@angular/core';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { AuthService } from '../../services/auth.services';




@Component({
  selector: 'login-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  faFacebook = faFacebook;
  faGoogle = faGoogle;

 user ={
   email: "",
   password: "" 
 }

 /* login(){
   console.log(this.usuario)
 } */
 constructor (private auth:AuthService){ }
  ngOnInit(): void {}

  /* loginForm(email: string, password: string){
    
     this.auth.login(email, password)
  
    .then(()=>console.log('usuario'))
         
  }  */
  
  /*
  sendEmail({ email: email.value, password: password.value })
  */
  formLogin(value: any){
    //const {emailLogin, passwordLogin} = value

    this.user.email = value.email;
    this.user.password = value.password;

    console.log(value)
    console.log(this.user)

    this.auth.login(this.user.email, this.user.password).then(()=> alert("meeeeeessage"))
  }

}


  
  
