import {Component, effect, inject, OnInit, signal} from '@angular/core';

import {CommonModule, DatePipe} from '@angular/common';
import {Router, RouterLink} from '@angular/router';
import { BookService } from '../../../Services/app.service';
import { Book } from '../../../Model/app.model';


@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent{
  
  private bookService = inject(BookService);
  private router = inject(Router);
      
  public books = this.bookService.filteredBooks;


  // onViewDetails(bookId: string) {
  //   this.router.navigate(["/books", bookId]);
  // }

  onEditClick(id: string) {
    this.router.navigate(["/edit-book", id]);
  }

  onDeleteClick(id: string) {
    this.bookService.deleteBook(id);
  }

}
