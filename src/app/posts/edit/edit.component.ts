import { Component, OnInit } from '@angular/core';
import { PostsService } from './../../posts.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  formulario: FormGroup;


  constructor(
    private activatedRoute: ActivatedRoute,
    private postsService: PostsService
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
}
