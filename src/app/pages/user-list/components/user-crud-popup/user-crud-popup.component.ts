import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Users } from 'src/app/models/users.model';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-user-crud-popup',
  templateUrl: './user-crud-popup.component.html',
  styleUrls: ['./user-crud-popup.component.scss']
})
export class UserCrudPopupComponent implements OnInit {

  userData = new Users(this.initData());
  isUniqueEmail =  false;
  isUniquePhone = false;

  constructor(
    private notifyService: NotificationService,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    if (this.data) {
      this.userData = this.data.element;
    }
  }

  initData(): Users {
    return {
      id: null,
      name: null,
      email: null,
      phone: null,
    };
  }

  addUser() {
    if(this.isUnigueEmail() && this.isUniguePhone()){
      let values = JSON.parse(localStorage.getItem("users"));
      this.userData.id = Math.floor(Math.random() * 1000) + 17;
      values.push(this.userData);
      localStorage.setItem('users', JSON.stringify(values));
      this.notifyService.showSuccess('Successfully added', '');

      this.dialog.closeAll();
    }
  }

  updateUser() {
      this.notifyService.showSuccess('Successfully updated', '');
      this.dialog.closeAll();
  }

  public isUnigueEmail():any {
    let values = JSON.parse(localStorage.getItem("users"));
    values.forEach(element => {
      if (element.email == this.userData.email) {
        this.notifyService.showError('Email must be unigue', '');
        return false;
      }
    });
  }


  public isUniguePhone() :any {
    let values = JSON.parse(localStorage.getItem("users"));
    values.forEach(element => {
      if (element.phone == this.userData.phone) {
        this.notifyService.showError('Phone must be unigue', '');
        return false;
      }
    });
  }

  closeDialog(): void {
    this.dialog.closeAll();
  }


  onSubmit() {
      if (this.data) {
        this.updateUser();
      } else {
        this.addUser();
      }
  }

}
