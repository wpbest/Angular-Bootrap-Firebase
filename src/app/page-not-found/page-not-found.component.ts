import { Component, OnInit } from '@angular/core';
import { AuthUserService } from '../auth/auth-user.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  constructor(public authUserService: AuthUserService) { }

  ngOnInit() {
  }

}
