import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user.model';
import { Api } from '../../services/api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-q3-http-client',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './q3-http-client.html',
  styleUrl: './q3-http-client.scss'
})
export class Q3HttpClient implements OnInit {
  users: User[] = [];

  constructor(private api: Api) {}

  ngOnInit(): void {
    this.api.getUsers().subscribe({
      next:(user:User[]) => {
        this.users = user;
      },
      error: (err: unknown) => {
        console.error('Error fetching users:', err);
      },
      complete: () => {
        console.log('User data fetch completed');
      }
    })
  }
}
