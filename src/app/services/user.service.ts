import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { Users } from '../models/users.model';

@Injectable({ providedIn: 'root' })
export class UserService implements OnDestroy {

  // tslint:disable-next-line: variable-name
  public _users: Subject<Users[]> = new Subject<Users[]>();
  users: Users[] = [];

  constructor() {
    this._users.subscribe((users) => {
      this.users = users;
    });
  }

  ngOnDestroy(): void {
    this._users.unsubscribe();
  }
}
