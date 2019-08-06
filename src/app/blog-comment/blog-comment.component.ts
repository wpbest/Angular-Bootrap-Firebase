import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Data } from '@angular/router';

import { BlogService } from '../blog-service/blog.service';
import { BlogReply } from '../blog-service/blog-reply.model';
import { BlogPost } from '../blog-service/blog-post.model';
import { AuthUserService } from '../auth/auth-user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-blog-comment',
  templateUrl: './blog-comment.component.html',
  styleUrls: ['./blog-comment.component.scss']
})
export class BlogCommentComponent implements OnInit, OnDestroy {
  isComment = false;
  @Input() commentDate;
  @Input() comment;
  @Input() id: number;
  @Input() commentId: number;
  @Input() displayCommentName: string;
  replyForm: FormGroup;
  postId: number;
  replyComment: BlogReply[];
  key: any;
  dataSubscription: Subscription;
  displayName = this.authUserService.diplayName;

  constructor(private route: ActivatedRoute, private blogService: BlogService, private authUserService: AuthUserService) { }

  ngOnInit() {
    this.postId = +this.route.snapshot.params.id;
    this.dataSubscription = this.blogService.getBlogData()
      .subscribe(
        (blogPost: BlogPost[]) => {
          if (blogPost[this.postId - 1].blogComment[this.commentId].reply) {
            this.replyComment = blogPost[this.postId - 1].blogComment[this.commentId].reply.reverse();
          }
        }
      );
    this.replyForm = new FormGroup({
    textareaReply: new FormControl(null)
    });

  }

  onReply(id: any) {
    if (id === null) {
      this.key = 0;
    } else {
      this.key = id;
    }
    this.isComment = !this.isComment;
  }

  onSubmit() {
    const postId = this.postId - 1;
    const textReply = this.replyForm.get('textareaReply').value;
    const reply = new BlogReply(textReply, Date.now(), this.displayName, '');
    this.blogService.addReply(postId, this.commentId, this.key, reply);
    this.replyForm.reset();
    this.isComment = false;
    setTimeout(() => {
      this.blogService.getBlogData()
        .subscribe(
          (data: Data) => {
            this.replyComment = data[this.postId - 1].blogComment[this.commentId].reply.reverse();
          }
        );
    }, 3000);
  }

  onCallSubmit() {
    this.onSubmit();
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
  }


}
