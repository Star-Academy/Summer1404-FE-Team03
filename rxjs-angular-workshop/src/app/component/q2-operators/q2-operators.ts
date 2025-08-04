import { Component, OnInit } from '@angular/core';
import { filter, from, map, Observable } from 'rxjs';

@Component({
  selector: 'app-q2-operators',
  imports: [],
  templateUrl: './q2-operators.html',
  styleUrl: './q2-operators.scss'
})
export class Q2Operators implements OnInit {

  myObservable$:Observable<number> = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  
  constructor() {}

  ngOnInit():void {

    
    this.myObservable$.pipe(
      filter(value => value % 2 === 0),
      map(value => value ** 2),
    ).subscribe(value => {
      console.log('Squared even Number:', value);
    })
  }


}
