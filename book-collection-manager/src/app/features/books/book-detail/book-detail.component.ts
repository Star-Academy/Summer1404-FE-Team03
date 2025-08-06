import {Component, computed, inject} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { Book } from '../../../Model/app.model';
import { BookService } from '../../../Services/app.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Component({
  selector: 'app-book',
  imports: [DatePipe,RouterLink, CommonModule],
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.scss',
  standalone: true
})
export class BookDetailComponent{
  
  private route = inject(ActivatedRoute);
  private bookService = inject(BookService);
  
  private bookId = toSignal (
    this.route.paramMap.pipe(
      map(params => params.get('id'))
    )
  )
  
  public book= computed(() => {
    const id = this.bookId();
    if (id) {
      return this.bookService.getBookById(id)();
    }
    return undefined;
  })

}
