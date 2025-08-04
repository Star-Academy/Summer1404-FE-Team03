import { Component, signal } from '@angular/core';
import { Q1Observable } from './component/q1-observable/q1-observable';
import { Q2Operators } from './component/q2-operators/q2-operators';
import { Q3HttpClient } from './component/q3-http-client/q3-http-client';


@Component({
  selector: 'app-root',
  imports: [Q1Observable,Q2Operators,Q3HttpClient],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  
}
