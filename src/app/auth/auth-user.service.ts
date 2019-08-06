import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})

export class AuthUserService {

  token: string;
  diplayName: string;

  constructor(private router: Router,
              private afAuth: AngularFireAuth) { }

  signupUser(email: string, password: string) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .catch(
        error => console.log(error)
      );
  }

  signinUser(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(
        response => {
          this.router.navigate(['/']);
          const inputAccount = email;
          const fields = inputAccount.split('@');
          this.diplayName = fields[0][0].toUpperCase() + fields[0].slice(1);
          this.afAuth.auth.currentUser.getIdToken()
            .then(
              (token: string) => this.token = token
            );
        }
      )
      .catch(
        error => console.log(error)
      );
  }

  getToken() {
    this.afAuth.auth.currentUser.getIdToken()
      .then(
        (token: string) => {
          this.token = token;
        }
      );
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }

  logout() {
    this.afAuth.auth.signOut();
    this.token = null;
  }


}
