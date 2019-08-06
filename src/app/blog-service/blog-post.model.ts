import { Injectable } from '@angular/core';
import { BlogComment } from './blog-comment.model';

@Injectable()
export class BlogPost {
  constructor(
    public imageUrl: string,
    public title: string,
    public description: string,
    public descriptionParagraph: string,
    public date: number = Date.now(),
    public blogComment: BlogComment[],
  ) {}
}
