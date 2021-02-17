import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../../../Service/user.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-details-user',
  templateUrl: './details-user.component.html',
  styleUrls: ['./details-user.component.css']
})
export class DetailsUserComponent implements OnInit {
user: any;
id: number;
  constructor(private route: ActivatedRoute, private userId: UserService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.user = this.userId.getOne(+id).subscribe(
      (data: any) => {
        this.user = data;
        console.log(this.user);
      });
  }
}
