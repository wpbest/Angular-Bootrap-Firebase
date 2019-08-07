import { NgModule } from '@angular/core';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { BlogService } from './blog-service/blog.service';
import { AuthUserService } from './auth/auth-user.service';
import { BlogRoutingModule } from './blog-service/blog-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FaqComponent } from './faq/faq.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'sidebar', component: SidebarComponent },
  { path: 'faq', component: FaqComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules}),
    AuthRoutingModule,
    BlogRoutingModule
  ],
  exports: [RouterModule],
  providers: [BlogService, AuthUserService]
})
export class AppRoutingModule { }
