import { Component, OnInit } from '@angular/core';
import { AuthUserService } from '../auth/auth-user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(public authUserService: AuthUserService) { }

  ngOnInit() {
  }

}
