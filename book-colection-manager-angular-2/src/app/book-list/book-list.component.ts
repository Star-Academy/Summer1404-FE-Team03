import {Component, OnInit} from '@angular/core';

import {CommonModule, DatePipe} from '@angular/common';
import {Book} from '../book.model';
import {BookService} from '../services/book.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent implements OnInit {
  public books: Book[] = [];

  constructor(private bookService: BookService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getBooks();
  }

  onViewDetails(bookId: string) {
    this.router.navigate(["/books", bookId]);
  }

  onEditClick(id: string) {
    this.router.navigate(["/edit-book", id]);
  }

  onDeleteClick(id: string) {
    this.bookService.deleteBook(id);
    this.getBooks();
  }


  private getBooks() {
    this.bookService.getBooks().subscribe(data => {
      this.books = data;
    })
  }
}
