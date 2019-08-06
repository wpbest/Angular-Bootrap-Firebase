import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthUserService } from '../auth/auth-user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  ngForm: NgForm;
  constructor(private authUserService: AuthUserService) { }

  ngOnInit() {
  }

  onSignin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authUserService.signinUser(email, password)
  }
}
