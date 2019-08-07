import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { ResolverService } from '../blog-service/resolver.service';
import { BlogPostItemComponent } from '../blog-post-item/blog-post-item.component';
import { BlogPostComponent } from '../blog-post/blog-post.component';
import { BlogReplyComponent } from '../blog-reply/blog-reply.component';
import { BlogCommentComponent } from '../blog-comment/blog-comment.component';
import { BlogWidgetComponent } from '../blog-widget/blog-widget.component';

const BlogRoutes: Routes = [
  { path: 'blog-post', component: BlogPostComponent, canActivate: [AuthGuard], children: [
    { path: ':id', component: BlogPostItemComponent, canActivate: [AuthGuard], resolve: {blogPost: ResolverService} }
  ] }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(BlogRoutes)
  ],
  exports: [RouterModule],
  providers: [ResolverService, AuthGuard]
})
export class BlogRoutingModule { }
