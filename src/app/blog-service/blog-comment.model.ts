import { BlogReply } from './blog-reply.model';
export class BlogComment {
  constructor(
    public comment: string,
    public date: number = Date.now(),
    public reply: BlogReply[],
    public user: string,
    public userImage: string
  ) {}
}
