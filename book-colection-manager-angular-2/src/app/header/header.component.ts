import { Component } from '@angular/core';

import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { BookService } from '../services/book.service'; 
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  standalone:true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  searchControl = new FormControl('');


  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.searchControl.valueChanges.pipe(
      debounceTime(300), 
      distinctUntilChanged() 
    ).subscribe(value => {
      console.log('1. HeaderComponent: Sending search term ->', value);
      this.bookService.searchBooks(value || '');
    });
  }
}
