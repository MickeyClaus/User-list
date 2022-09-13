import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from 'src/app/models/users.model';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  public id: number;
  public userData: any;

  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router) {
    this.id = activateRoute.snapshot.params.id;
  }
  ngOnInit(): void {

    let values = JSON.parse(localStorage.getItem("users"));
    this.userData = values.find(x => x.id == this.id);
  }

}
