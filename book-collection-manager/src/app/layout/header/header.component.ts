import { Component, effect, inject } from '@angular/core'; 
import { toSignal } from '@angular/core/rxjs-interop';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { BookService } from '../../Services/app.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  searchControl = new FormControl<string | null>('');
  
  searchTerm = toSignal(this.searchControl.valueChanges.pipe(
    debounceTime(300),
    distinctUntilChanged()
  ));


  private bookService = inject(BookService);

  private searchEffect = effect(() => {
    const currentTerm = this.searchTerm();
    if (currentTerm !== undefined) {
      this.bookService.searchBooks(currentTerm || '');
    }
  });

}