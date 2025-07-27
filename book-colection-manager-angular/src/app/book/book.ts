import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

interface books{
  name: string;
  image: string;
  genre: string[];
  author: string;
  publishData: string;
  price: number;
}

@Component({
  selector: 'app-book',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './book.html',
  styleUrl: './book.scss'
})
export class Book implements OnInit {
  books: books[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<books[]>('books.json').subscribe(data => {
      this.books = data;
    });
  }

}