export class BlogReply {
    constructor(
      public reply: string,
      public date: number = Date.now(),
      public user: string,
      public userImage: string
    ) {}
  }
