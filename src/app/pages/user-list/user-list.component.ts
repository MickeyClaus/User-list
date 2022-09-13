import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Users } from 'src/app/models/users.model';
import { UserCrudPopupComponent } from './components/user-crud-popup/user-crud-popup.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  public users: Users[] = [];

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.users = JSON.parse(localStorage.getItem('users'));
  }

  public addUser(): void {
    const dialog = this.dialog.open(UserCrudPopupComponent, {
      panelClass: 'adminPopup',
      minWidth: 570 + 'px',
      maxWidth: 770 + 'px',
      minHeight: 300 + 'px'
    });
    dialog.afterClosed().subscribe(() => {
      this.users = JSON.parse(localStorage.getItem('users'));
    });
  }

  public update(e) {
    if(e){
      this.users = JSON.parse(localStorage.getItem('users'));

    }
  }

}
