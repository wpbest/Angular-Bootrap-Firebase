import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

import { BlogService } from '../blog-service/blog.service';
import { BlogPost } from '../blog-service/blog-post.model';
import { BlogComment } from '../blog-service/blog-comment.model';
import { AuthUserService } from '../auth/auth-user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-blog-post-item',
  templateUrl: './blog-post-item.component.html',
  styleUrls: ['./blog-post-item.component.scss']
})
export class BlogPostItemComponent implements OnInit, OnDestroy {

  blogPost: BlogPost;
  paramsId: number;
  resolveSubscription: Subscription;
  commentForm: FormGroup;
  blogComment: BlogComment;
  key: any;
  displayName = this.authUserService.diplayName;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private authUserService: AuthUserService
  ) {}

  ngOnInit() {
    this.paramsId = +this.route.snapshot.params.id;
    this.resolveSubscription = this.route.data
      .subscribe(
        (data: Data) => {
          this.blogPost = data.blogPost[this.paramsId - 1];
          if (data.blogPost[this.paramsId - 1].blogComment) {
            this.blogComment = data.blogPost[this.paramsId - 1].blogComment.reverse();
          }
        }
      );
    this.commentForm = new FormGroup({
      textareaComment: new FormControl(null)
    });
  }

  onSubmit() {
    const commentLength = Object.keys(this.blogComment).length;
    if (commentLength === null) {
      this.key = 0;
    } else {
      this.key = commentLength;
    }
    const id = this.paramsId - 1;
    const blogComment = this.commentForm.get('textareaComment').value;
    const comment = new BlogComment(blogComment, Date.now(), [], this.displayName, '');
    this.blogService.addComment(id, comment, this.key);
    this.commentForm.reset();
    setTimeout(() => {
      this.blogService.getBlogData()
        .subscribe(
          (data: Data) => {
            this.blogComment = data[this.paramsId - 1].blogComment.reverse();
          }
        );
    }, 3000);
  }

  ngOnDestroy() {
    this.resolveSubscription.unsubscribe();
  }

}
