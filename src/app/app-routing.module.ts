import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './posts/list/list.component';
import { DetailComponent } from './posts/detail/detail.component';
import { NewComponent } from './posts/new/new.component';
import { EditComponent } from './posts/edit/edit.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/post' },
  { path: 'posts', component: ListComponent },
  { path: 'posts/new', component: NewComponent },
  { path: 'posts/:postId', component: DetailComponent },
  { path: 'posts/edit/:postId', component: EditComponent },
  { path: '**', component: ListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
