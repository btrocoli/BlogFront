import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './models/post.model';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  getAll(): Promise<Post[]> {
    return this.http.get<Post[]>('http://localhost:3000/posts').toPromise();
  }

  getById(postId): Promise<Post> {
    return this.http.get<Post>(`http://localhost:3000/posts/${postId}`).toPromise();
  }

  update(postId, values): Promise<Post> {
    return this.http.put<Post>(`http://localhost:3000/posts/${postId}`, values).toPromise();
  }

  create(values) {
    return this.http.post('http://localhost:3000/posts/create', values).toPromise();
  }

  delete(postId) {
    return this.http.delete(`http://localhost:3000/posts/${postId}`).toPromise();
  }

}
