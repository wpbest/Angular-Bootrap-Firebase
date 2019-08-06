import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthUserService } from '../auth/auth-user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isShow: boolean = false;
  isCollapsed: boolean = true;
  constructor(private router: Router,
              public authUserService: AuthUserService) {
    this.isCollapsed = true;
  }

  ngOnInit() {
  }

  toggleState() {
    this.isShow = !this.isShow;
  }

  onLogout() {
    this.authUserService.logout();
    this.router.navigate(['/']);
  }  

}
