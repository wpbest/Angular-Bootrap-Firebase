import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

const BlogRoutes: Routes = [
  { path: 'blog-post', component: BlogPostComponent, canActivate: [AuthGuard], children: [
    { path: ':id', component: BlogPostItemComponent, canActivate: [AuthGuard], resolve: {blogPost: BlogResolver} }
  ] }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(BlogRoutes)
  ],
  exports: [RouterModule],
  providers: [BlogResolver, AuthGuard]
})
export class BlogRoutingModule { }
