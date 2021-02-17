import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../../Service/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  user: any;
  avatar: any;

  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.user = this.userService.getOne(+id).subscribe(
      (data: any) => {
        this.user = data;
        console.log(this.user);
      });
  }

  uploadFile(event: any): any {
    this.avatar = event.target.files[0];
  }

  edit(): any {
    delete (this.user.avatar);
    const formData = new FormData();
    for (const key in this.user) {
      formData.append(key, this.user[key]);
    }
    if (this.avatar) {
      formData.append('avatar', this.avatar);
    }
    console.log(formData);
    this.userService.editUser(formData).subscribe(
      (res: any) => {
        console.log('success');
        console.log(this.avatar);
        this.router.navigate(['/list-user']);
      },
      (error: any) => {
        console.log('error');
      }
    );
  }

}
