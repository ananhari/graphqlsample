import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { DetailComponent } from './books/detail/detail.component';
import { AddComponent } from './books/add/add.component';

const routes: Routes = [
  { path: '',
      redirectTo: '/books',
      pathMatch: 'full'
  },
  {
    path:'books',
    component:BooksComponent,
    data:{title: 'List of Books'}
  },
  {
    path: 'books/detail/:id',
    component: DetailComponent,
    data: { title: 'Book Details' }
  },
  {
    path: 'books/add',
    component: AddComponent,
    data: { title: 'Add a Book' }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
