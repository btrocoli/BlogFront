import { Component, OnInit } from '@angular/core';
import { PostsService } from './../../posts.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  formulario: FormGroup;


  constructor(
    private activatedRoute: ActivatedRoute,
    private postsService: PostsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.postsService.getById(params.postId)
        .then(response => {
          this.formulario = new FormGroup({
            titulo: new FormControl(response.titulo),
            usuario: new FormControl(response.usuario),
            fecha: new FormControl(response.fecha),
            categoria: new FormControl(response.categoria),
            mensaje: new FormControl(response.mensaje)
          });
        }).catch(err => {
          console.log(err);
        });
    });
  }

  onSubmit() {
    this.activatedRoute.params.subscribe(params => {
      this.postsService.update(params.postId, Object.assign({idArticulo: params.postId }, this.formulario.value))
        .then(response => {
          console.log(response);
          alert('Post editado correctamente');
          this.router.navigate(['/posts']);
        }).catch(err => {
          console.log(err);
        });
    });
  }
}
