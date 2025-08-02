import { Routes } from '@angular/router';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookListComponent } from './book-list/book-list.component';
import { AddBookComponent } from './add-book/add-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { animation } from '@angular/animations';

export const routes: Routes = [
  {
    path: '',
    component: BookListComponent,
    data: { animation: 'BookListPage' }
  },
  {
    path: 'add-book',
    component: AddBookComponent,
  },
  {
    path: 'edit-book',
    component: EditBookComponent,
  },

  {
    path: 'books/:id',
    component: BookDetailComponent,
    data: { animation: 'BookDetailPage' } 
  },

];
