import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserListRoutingModule } from './user-list-routing.module';
import { UserListComponent } from '../user-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UsersTableComponent } from '../components/users-table/users-table.component';
import { UserCrudPopupComponent } from '../components/user-crud-popup/user-crud-popup.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [UserListComponent, UsersTableComponent, UserCrudPopupComponent],
  imports: [
    CommonModule,
    UserListRoutingModule,
    SharedModule,
    MaterialModule,
    FormsModule,
  ]
})
export class UserListModule { }
