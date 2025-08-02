import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, combineLatest } from 'rxjs';
import { Book } from '../book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private booksUrl = 'assets/books.json'
  private storageKey = 'my-book'

  private books$ = new BehaviorSubject<Book[]>([])
  private searchTerm$ = new BehaviorSubject<string>('');

  constructor(private http: HttpClient) {
    this.loadInitialData();
  }


  private loadInitialData() {
    const storedBooks = localStorage.getItem(this.storageKey);
    if (storedBooks && JSON.parse(storedBooks).length > 0) {

      this.books$.next(JSON.parse(storedBooks));
    } else {

      this.http.get<Book[]>(this.booksUrl).subscribe(data => {
        this.books$.next(data);
        localStorage.setItem(this.storageKey, JSON.stringify(data));
      });
    }
  }


  getBooks(): Observable<Book[]> {
    return combineLatest([this.books$, this.searchTerm$]).pipe(
      map(([books, searchTerm]) => {
        console.log('3. BookService: Filtering with term ->', searchTerm);
        if (!searchTerm) {
          return books;
        }
        return books.filter(book =>
          book.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
      })
    );
  }

  searchBooks(term: string) {
    console.log('2. BookService: Received search term ->', term);
    this.searchTerm$.next(term);
  }


  getBookById(id: string): Observable<Book | undefined> {
    return this.getBooks().pipe(
      map(books => books.find(book => book.id === id))
    );
  }


  addBook(bookData: any) {
    const currentBooks = this.books$.getValue();
    const newBook: Book = {
      ...bookData,
      id: self.crypto.randomUUID(),
      genre: bookData.genre.split(',').map((g: string) => g.trim()),
    };
    
    const updatedBooks = [...currentBooks, newBook];
    this.books$.next(updatedBooks);
    localStorage.setItem(this.storageKey, JSON.stringify(updatedBooks));
  }
}

