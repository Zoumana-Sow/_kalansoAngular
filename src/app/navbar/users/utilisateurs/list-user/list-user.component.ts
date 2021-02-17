import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../../Service/user.service';
import {Utilisateur} from '../../../../utilisateur';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
 public users: Array<any> = [];
  public page = 1;
  public pageSize = 10;
  constructor(private user: UserService) { }

  ngOnInit(): void {
    this.user.getUsers().subscribe(
      (users) => {
        this.users = users;
        console.log(this.users);
      },
      (error) => {
        // alert('acces error');
        console.log(error);
      }
    );
  }

}
