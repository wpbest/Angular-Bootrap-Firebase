import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements DoCheck{
  title = 'angular-bootstrap-firebase';
  currentUrl = '';
  currentPageUrl = '';

  constructor(private router: Router ) { }

  ngDoCheck() {
    const currentUrl = this.router.url.slice(1).charAt(0).toUpperCase() + this.router.url.slice(2);
    this.currentPageUrl = this.router.url.slice(1).charAt(0) + this.router.url.slice(2);
    const currentUrlSlash = currentUrl.substring(0, currentUrl.indexOf('/'));
    if (currentUrlSlash) {
      this.currentUrl = currentUrlSlash;
    } else {
      this.currentUrl = currentUrl;
    }
  }

}
