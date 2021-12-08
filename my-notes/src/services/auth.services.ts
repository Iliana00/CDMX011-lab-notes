import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
//import firebase from "firebase/compat/app";


@Injectable()

export class AuthService{
    constructor (private auth:AngularFireAuth){ }
  
    async login(email: string, password: string){
        return await this.auth.signInWithEmailAndPassword(email, password) 
    }
    async sigup(email: string, password: string){
        return await this.auth.createUserWithEmailAndPassword(email, password)
    }
    async signout(){
        return await this.auth.signOut()
    }

  
  }