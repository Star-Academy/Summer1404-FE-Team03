import { Component, signal } from '@angular/core';


import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {RouterOutlet} from '@angular/router';
import { fader } from './route-animations';


@Component({
  selector: 'app-root',
  standalone:true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [HeaderComponent, FooterComponent, RouterOutlet],
  animations:[
    fader
  ]
})
export class App {
  protected readonly title = signal('book-colection-manager-angular');

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}