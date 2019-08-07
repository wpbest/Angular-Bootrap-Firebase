import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { PageHeaderComponent } from './page-header/page-header.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

import { NgbModule,
         NgbAlertModule,
         NgbCarouselModule,
         NgbCollapseModule,
         NgbButtonsModule,
         NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogWidgetComponent } from './blog-widget/blog-widget.component';
import { BlogPostItemComponent } from './blog-post-item/blog-post-item.component';
import { BlogCommentComponent } from './blog-comment/blog-comment.component';
import { BlogReplyComponent } from './blog-reply/blog-reply.component';
import { HttpClientModule} from '@angular/common/http';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { BlogRoutingModule } from './blog-service/blog-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FaqComponent } from './faq/faq.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    PageHeaderComponent,
    SigninComponent,
    SignupComponent,
    BlogPostComponent,
    BlogWidgetComponent,
    BlogPostItemComponent,
    BlogCommentComponent,
    BlogReplyComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    SidebarComponent,
    FaqComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), // initialize
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
    NgbModule,
    NgbAlertModule,
    NgbCarouselModule,
    NgbCollapseModule,
    NgbButtonsModule,
    NgbDropdownModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AuthRoutingModule,
    BlogRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
