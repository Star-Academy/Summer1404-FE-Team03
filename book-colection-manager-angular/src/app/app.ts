import { Component, signal } from '@angular/core';
import { Aside } from "./aside/aside";
import { Header } from "./header/header";
import { Footer } from "./footer/footer";
import { Book } from "./book/book";

@Component({
  selector: 'app-root',
  standalone:true,
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [Aside, Header, Footer, Book]
})
export class App {
  protected readonly title = signal('book-colection-manager-angular');
}
