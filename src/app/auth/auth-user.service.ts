import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})

export class AuthUserService {

  token: string;
  diplayName: string;  

  constructor(private router: Router) { }

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(
        error => console.log(error)
      )
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          this.router.navigate(['/']);
          const inputAccount = email;
          const fields = inputAccount.split('@');
          this.diplayName = fields[0][0].toUpperCase() + fields[0].slice(1);
          firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => this.token = token
            )
        }
      )
      .catch(
        error => console.log(error)
      )
  }

  getToken() {
    firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => {
          this.token = token
        }
      );
    return this.token
  }

  isAuthenticated() {
    return this.token != null;
  }

  logout() {
    firebase.auth().signOut();
    this.token = null
  }


}
