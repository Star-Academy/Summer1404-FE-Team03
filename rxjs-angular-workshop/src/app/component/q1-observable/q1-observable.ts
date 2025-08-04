import { Component } from '@angular/core';
import { Observable, of  } from 'rxjs';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-q1-observable',
  standalone: true,
  imports: [],
  templateUrl: './q1-observable.html',
  styleUrl: './q1-observable.scss'
})
export class Q1Observable implements OnInit {

  myObservable$:Observable<number> = of(1, 2, 3, 4, 5);

  ngOnInit(): void {
    
    const myObserver = {
      next: (value: number) => {
        console.log('Value:', value);
      },
      error:(err:unknown) =>{
        console.log('An error occurred:', err)
      },
      complete: () => {
        console.log('Completed');
      }
    }
    
    this.myObservable$.subscribe(myObserver);

  }
}
