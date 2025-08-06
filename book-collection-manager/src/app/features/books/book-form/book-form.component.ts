import {CommonModule} from '@angular/common';
import {Component, computed, effect, inject, OnInit, signal} from '@angular/core';
import {ReactiveFormsModule, FormGroup, FormControl, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { BookService } from '../../../Services/app.service';


@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.scss'
})
export class BookFormComponent implements OnInit {

  private bookId = signal<string | null>(null);
  public editMode = computed(() => !!this.bookId());
  public successMessage = signal<string | null>(null);
  public imagePreview = signal<string | null>(null);
  public selectedFile = signal<File | null>(null);

  addBookForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    author: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z .-]+$')]),
    image: new FormControl(''),
    synopsis: new FormControl('', Validators.required),
    genre: new FormControl('', Validators.required),
    publishData: new FormControl('', Validators.required),
    price: new FormControl(0, [Validators.required, Validators.min(1)])
  });

  
  private bookService = inject(BookService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  constructor() {
    effect(() => {
      const currentBookId = this.bookId();
      if (currentBookId) {
        const bookSignal = this.bookService.getBookById(currentBookId);
        const book = bookSignal(); 
        if (book) {
          this.addBookForm.patchValue({
            name: book.name,
            author: book.author,
            synopsis: book.synopsis,
            genre: book.genre.join(', '),
            publishData: book.publishData,
            price: book.price
          });
        }
      }
    });
  }

  ngOnInit(): void {
    this.bookId.set(this.route.snapshot.paramMap.get('id'));
  }




  onFileSelected(event: Event): void {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files.length > 0) {
    const file = input.files[0];
    this.selectedFile.set(file); 

    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview.set(reader.result as string);
    };
    reader.readAsDataURL(file);
  }
}

  onSubmit() {
    if (!this.addBookForm.valid) {
      return;
    }

    if (this.editMode() && this.bookId()) {

      this.bookService.updateBook(this.bookId()!, this.addBookForm.value);
      this.successMessage.set('Book updated successfully!');

    } else {

      const formValue = this.addBookForm.value;
      const newBookData = {
        ...formValue,
        image: this.imagePreview() || 'assets/images/default-cover.png',
      };
      this.bookService.addBook(newBookData);
      this.successMessage.set('Book added successfully!');
    }


    this.addBookForm.reset();
    this.imagePreview.set(null);
    this.selectedFile.set(null);
    setTimeout(() => this.successMessage.set(null), 3000);
  }
}
