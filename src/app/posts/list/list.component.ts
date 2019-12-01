import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { PostsService } from 'src/app/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  arrPosts: Post[];

  constructor(
    private postService: PostsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.cargarPost();
  }

  cargarPost() {
    this.postService.getAll()
      .then(response => {
        console.log(response);
        this.arrPosts = response;
      }).catch(err => {
        console.log(err);
      });
  }

  clickDetalle(post) {
    this.router.navigate(['/posts', post._id]);
  }

  clickEliminar(post) {
    this.postService.delete(post._id)
      .then(response => {
        console.log(response);
        alert('Post borrado');
        this.cargarPost();
      }).catch(err => console.log(err));
  }
}
