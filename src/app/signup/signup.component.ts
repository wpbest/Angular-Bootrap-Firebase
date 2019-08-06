import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthUserService } from '../auth/auth-user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {

  constructor(private authUserService: AuthUserService) { }

  ngOnInit() {
  }

  onSignup(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authUserService.signupUser(email, password);
  }
}
