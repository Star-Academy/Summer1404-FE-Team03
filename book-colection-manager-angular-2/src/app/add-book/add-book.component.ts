import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule,FormGroup, FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from '../services/book.service';


@Component({
  selector: 'app-add-book',
  standalone:true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.scss'
})
export class AddBookComponent {
  successMessage: string | null = null;

  addBookForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    author: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]),
    image: new FormControl(''), 
    synopsis: new FormControl('', Validators.required),
    genre: new FormControl('', Validators.required), 
    publishData: new FormControl('', Validators.required),
    price: new FormControl(0, [Validators.required, Validators.min(1)])
  });

  constructor(
    private router: Router,
    private bookService: BookService,

  ){}


  selectedFile: File | null = null;


  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      console.log('File selected:', this.selectedFile);
    }
  }


  onSubmit() {
    if (this.addBookForm.valid) {
      this.bookService.addBook(this.addBookForm.value);
      
      
      this.successMessage = 'Book added successfully!';
      
      this.addBookForm.reset();

      setTimeout(() => {
        this.successMessage = null;
      }, 3000);
    }
  }
}
