import { Routes } from '@angular/router';
import { BookListComponent } from './features/books/book-list/book-list.component';
import { BookFormComponent } from './features/books/book-form/book-form.component';
import { BookDetailComponent } from './features/books/book-detail/book-detail.component';

export const routes: Routes = [
  {
    path: '',
    component: BookListComponent,
  },
  {
    path: 'add-book',
    component: BookFormComponent,
  },
  {
    path: 'books/:id/edit',
    component: BookFormComponent,
  },

  {
    path: 'books/:id',
    component: BookDetailComponent,
  },

];
