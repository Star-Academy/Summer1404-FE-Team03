import {HttpClient} from '@angular/common/http';
import {computed, Injectable, Signal, signal} from '@angular/core';
import {Observable} from 'rxjs';
import {Book} from '../Model/app.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private booksUrl = 'assets/data/books.json'
  private storageKey = 'my-book'

  private books = signal<Book[]>([])
  private searchTerm = signal<string>('');

  public filteredBooks = computed(()=> {
    const term = this.searchTerm();
    const books = this.books();
    if (!term){
        return books;
    }
    const filtered = books.filter(book => 
        book.name.toLowerCase().includes(term.toLowerCase()));
         return filtered;
  });

  
  constructor(private http: HttpClient) {
      this.loadInitialData();
    }
    
    
    private loadInitialData() {
        const storedBooks = localStorage.getItem(this.storageKey);
        if (storedBooks && JSON.parse(storedBooks).length > 0) {
            
            this.books.set(JSON.parse(storedBooks));
        } else {
            
            this.http.get<Book[]>(this.booksUrl).subscribe(data => {
                this.books.set(data);
                localStorage.setItem(this.storageKey, JSON.stringify(data));
            });
        }
    }
    
    
    searchBooks(term: string) {
      this.searchTerm.set(term);
    }
    
    
  getBookById(id: string): Signal<Book | undefined> {
    return computed(() => {
        return this.books().find(book => book.id === id);
    })
  }


  addBook(bookData: any) {

    const currentBooks = this.books();

  const newBook: Book = {
    ...bookData,
    
    id: Math.random().toString(36).substring(2, 9),

    genre: bookData.genre.split(',').map((g: string) => g.trim()),
  };

  const updatedBooks = [...currentBooks, newBook];

  this.books.set(updatedBooks);
  localStorage.setItem(this.storageKey, JSON.stringify(updatedBooks));
}

  deleteBook(id: string) {
    const currentBooks = this.books();
    const updatedBooks = currentBooks.filter(book => book.id !== id);

    this.books.set(updatedBooks);
    localStorage.setItem(this.storageKey, JSON.stringify(updatedBooks));
  }

  updateBook(id: string, updatedData: any) {
    const currentBooks = this.books();
    const updatedBooks = currentBooks.map(book => {
        if (book.id === id) {
        const updatedBook = {
            ...book,
            ...updatedData,
            genre: (typeof updatedData.genre === 'string')
            ? updatedData.genre.split(',').map((g: string) => g.trim())
            : book.genre,
        };
        
        if (!updatedData.image) {
            updatedBook.image = book.image;
        }
        
        return updatedBook;
        }
        return book;
    });

    this.books.set(updatedBooks);
    localStorage.setItem(this.storageKey, JSON.stringify(updatedBooks));
    }


}

