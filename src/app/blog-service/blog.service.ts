import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse} from '@angular/common/http';
import { BlogPost } from './blog-post.model';
import { BlogComment } from './blog-comment.model';
import { BlogReply } from './blog-reply.model';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})

export class BlogService {
  private blogPosts: BlogPost[] = [
    new BlogPost(
      'assets/images/blog/blog-cover/blog-cover1.jpeg',
      'The standard Lorem Ipsum passage, used since the 1500s',
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ' +
      'magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo ' +
      'consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' +
      ' Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, tenetur natus doloremque laborum quos iste ipsum ' +
      'rerum obcaecati impedit odit illo dolorum ab tempora nihil dicta earum fugiat. Temporibus, voluptatibus.',
      Date.now(),
      [
        new BlogComment(
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          Date.now(),
          [
            new BlogReply(
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
              Date.now(),
              '',
              ''
            )
          ],
          '',
          ''
        ),
        new BlogComment(
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          Date.now(),
          [],
          '',
          ''
        ),
        new BlogComment(
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          Date.now(),
          [],
          '',
          ''
        ),
      ],
    ),
    new BlogPost(
      'assets/images/blog/blog-cover/blog-cover2.gif',
      'Section 1.10.32 of "de Finibus Bonorum et Malorum"',
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ' +
      'magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo ' +
      'consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, tenetur natus doloremque laborum quos iste ipsum ' +
      'rerum obcaecati impedit odit illo dolorum ab tempora nihil dicta earum fugiat. Temporibus, voluptatibus.',
      Date.now(),
      [
        new BlogComment(
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        Date.now(),
        [
          new BlogReply(
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            Date.now(),
            '',
            ''
          )
        ],
        '',
        ''
      ),
        new BlogComment(
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          Date.now(),
          [],
          '',
          ''
        ),
        new BlogComment(
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          Date.now(),
          [],
          '',
          ''
        ),
      ],
    ),
    new BlogPost(
      'assets/images/blog/blog-cover/blog-cover3.jpg',
      '1914 translation by H. Rackham',
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ' +
      'magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo ' +
      'consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' +
      ' Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, tenetur natus doloremque laborum quos iste ipsum ' +
      'rerum obcaecati impedit odit illo dolorum ab tempora nihil dicta earum fugiat. Temporibus, voluptatibus.',
      Date.now(),
      [
        new BlogComment(
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          Date.now(),
          [
            new BlogReply(
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
              Date.now(),
              '',
              ''
            )
          ],
          '',
          ''
        ),
        new BlogComment(
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          Date.now(),
          [],
          '',
          ''
        ),
        new BlogComment(
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          Date.now(),
          [],
          '',
          ''
        ),
      ],
    ),
    new BlogPost(
      'assets/images/blog/blog-cover/blog-cover4.jpg',
      'Ut enim ad minima veniam, quis nostrum exercitationem',
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ' +
      'magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo ',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, tenetur natus doloremque laborum quos iste ipsum ' +
      'rerum obcaecati impedit odit illo dolorum ab tempora nihil dicta earum fugiat. Temporibus, voluptatibus.',
      Date.now(),
      [
        new BlogComment(
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          Date.now(),
          [
            new BlogReply(
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
              Date.now(),
              '',
              ''
            )
          ],
          '',
          ''
        ),
        new BlogComment(
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          Date.now(),
          [],
          '',
          ''
        ),
        new BlogComment(
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          Date.now(),
          [],
          '',
          ''
        ),
      ],
    ),
    new BlogPost(
      'assets/images/blog/blog-cover/blog-cover5.jpg',
      'On the other hand, we denounce with righteous indignation.',
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ' +
      'magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo ' +
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo ' +
      'consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' +
      ' Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, tenetur natus doloremque laborum quos iste ipsum ' +
      'rerum obcaecati impedit odit illo dolorum ab tempora nihil dicta earum fugiat. Temporibus, voluptatibus.',
      Date.now(),
      [
        new BlogComment(
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          Date.now(),
          [
            new BlogReply(
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
              Date.now(),
              '',
              ''
            )
          ],
          '',
          ''
        ),
        new BlogComment(
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          Date.now(),
          [],
          '',
          ''
        ),
        new BlogComment(
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          Date.now(),
          [],
          '',
          ''
        ),
      ],
    ),
    new BlogPost(
      'assets/images/blog/blog-cover/blog-cover6.jpg',
      ' But in certain circumstances and owing to the claims of duty',
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ' +
      'magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo ' +
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo ' +
      'consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' +
      ' Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, tenetur natus doloremque laborum quos iste ipsum ' +
      'rerum obcaecati impedit odit illo dolorum ab tempora nihil dicta earum fugiat. Temporibus, voluptatibus.',
      Date.now(),
      [
        new BlogComment(
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          Date.now(),
          [
            new BlogReply(
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
              Date.now(),
              '',
              ''
            )
          ],
          '',
          ''
        ),
        new BlogComment(
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          Date.now(),
          [],
          '',
          ''
        ),
        new BlogComment(
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          Date.now(),
          [],
          '',
          ''
        ),
      ],
    )
  ];

  addComment(id: number, blogComment: BlogComment, key: any) {
    firebase.database().ref('blogData/' + id + '/blogComment').child(key).set(
      blogComment
    ).then(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }

  addReply(postId: number, id: number, key: any, blogReply: BlogReply) {
    firebase.database().ref('blogData/' + postId + '/blogComment/' + id + '/reply').child(key).set(
      blogReply
    ).then(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }

  getComment(postId: number, id: number) {
    return this.blogPosts[postId].blogComment[id]
  }

  getBlogPosts() {
    return this.blogPosts;
  }


  constructor(private http: HttpClient) {}

  storeBlogData() {
    return this.http.post('https://mb-angular-b4180.firebaseio.com/blogData.json', this.blogPosts)
  }

  getBlogData() {
    return this.http.get('https://mb-angular-b4180.firebaseio.com/blogData.json')
      .map(
        (response: Response) => {
          const data = response.json();
          return data;
        }
      )
      .catch(
        (error: Response) => {
          return Observable.throw('Error!!! if you want to view type of error change this log.')
        }
      )
  }
}
