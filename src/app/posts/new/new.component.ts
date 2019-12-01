import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { PostsService } from 'src/app/posts.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private postsService: PostsService,
    private router: Router
  ) {
    this.formulario = new FormGroup({
      titulo: new FormControl(''),
      usuario: new FormControl(''),
      fecha: new FormControl(''),
      categoria: new FormControl(''),
      mensaje: new FormControl('')
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.postsService.create(this.formulario.value)
      .then(response => {
        console.log(response);
        alert('Post creado correctamente');
        this.router.navigate(['/posts']);
      }).catch(err => {
        console.log(err);
      });
  }

}
