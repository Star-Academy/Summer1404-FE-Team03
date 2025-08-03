import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import { Book } from '../book.model';
import { BookService } from '../services/book.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-book',
  imports: [DatePipe,RouterLink],
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.scss',
  standalone: true
})
export class BookDetailComponent implements OnInit {
  book: Book | undefined;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
  ) { }

  ngOnInit(): void {


    const id = this.route.snapshot.paramMap.get('id');
     

    if (id) {
      this.bookService.getBookById(id).subscribe(bookData => {
        this.book = bookData;
      });
    }
  }
}
