import { AngularFireAuth } from '@angular/fire/compat/auth';



export class AuthService{
    constructor (private auth:AngularFireAuth){ }
  
    login(email: string, password: string){
        return this.auth.signInWithEmailAndPassword(email, password) 
    }
   
  
  
  }