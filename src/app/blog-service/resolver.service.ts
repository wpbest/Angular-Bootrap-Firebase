import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { BlogPost } from './blog-post.model';
import { BlogService } from './blog.service';

@Injectable({
  providedIn: 'root'
})
export class ResolverService implements Resolve<BlogPost[]> {
  constructor(private blogService: BlogService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<BlogPost[]> | Promise<BlogPost[]> | BlogPost[] {
    return this.blogService.getBlogData()
  }  
}
