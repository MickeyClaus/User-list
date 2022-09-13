import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Users } from 'src/app/models/users.model';
import { NotificationService } from 'src/app/services/notification.service';
import { UserService } from 'src/app/services/user.service';
import { UserCrudPopupComponent } from '../user-crud-popup/user-crud-popup.component';



@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent implements OnInit {
  public displayedColumns: string[] = ['id', 'name', 'email', 'phone', 'edit', 'delete'];
  @Input() dataSource: Users[] = [];
  @Output() updateItem = new EventEmitter<boolean>();
  constructor(private dialog: MatDialog, private notifyService: NotificationService, private router: Router) { }

  ngOnInit(): void {
    

  }

  public removeUser(obj): void {
    let newUsers = [];
    this.dataSource.forEach(element => {
      if (element !== obj) {
        newUsers.push(element);
      }
    });
    localStorage.setItem('users', JSON.stringify(newUsers));
    this.dataSource = this.dataSource.filter(item => item !== obj);
    this.notifyService.showSuccess('Successfully deleted', '');
  }


  public updateUser(element): void {
    const dialog = this.dialog.open(UserCrudPopupComponent, {
      data: { element },
      panelClass: 'adminPopup',
      minWidth: 570 + 'px',
      maxWidth: 770 + 'px',
      minHeight: 300 + 'px'
    });
    dialog.afterClosed().subscribe(() => {
      // this.updateItem.emit(true);
    });
  }


  public getUser(id: number): void {
    this.router.navigate(['/user-info', id]);
  }

}
