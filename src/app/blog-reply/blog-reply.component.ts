import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-reply',
  templateUrl: './blog-reply.component.html',
  styleUrls: ['./blog-reply.component.scss']
})
export class BlogReplyComponent implements OnInit {

  @Input() reply;
  @Input() replyDate;
  @Input() displayReplyName: string;

  constructor() { }

  ngOnInit() {
  }

}
