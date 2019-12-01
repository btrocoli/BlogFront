import { Post } from './../../models/post.model';
import { PostsService } from './../../posts.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  post: Post;

  constructor(
    private activatedRoute: ActivatedRoute,
    private postsService: PostsService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.postsService.getById(params.postId)
        .then(response => {
          this.post = response;
        }).catch(err => {
          console.log(err);
        });
    });
  }
}
