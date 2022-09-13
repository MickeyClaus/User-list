import { Component, OnInit } from '@angular/core';
import { User_List } from './mocks/users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'users-app';

  ngOnInit(): void {
    localStorage.setItem('users', JSON.stringify(User_List));
  }
}
