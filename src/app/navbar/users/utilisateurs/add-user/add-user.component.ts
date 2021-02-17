import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../../Service/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  addForm: any = FormGroup;
  avatar: File;
  submitted = false;

  constructor(private service: UserService, private  router: Router) { }

  ngOnInit(): void {
    this.addForm = new FormGroup({
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      email: new FormControl('', Validators.email),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      profils: new FormControl(''),
      adresse: new FormControl(''),
      avatar: new FormControl(''),
      tel: new FormControl('', [Validators.required, Validators.minLength(9)]),
    });
  }
  get f(){
    return this.addForm.controls;
  }
  uploadFile(event: any): any {
    this.avatar = event.target.files[0];
  }
  addUser(): any {
    this.submitted = true;
    const formValue = this.addForm.value;
    const formData = new FormData();
    for (const key of Object.keys(formValue)) {
      const value = formValue[key];
      if (key === 'avatar'){
        formData.append('avatar', this.avatar);
      }else{
        formData.append(key, value);
      }
    }
    // if (this.avatar){
    //   console.log('zoumana');
    //
    // }
    this.service.addUse(formData).subscribe(
      (res: any ) => {
        console.log('success');
        this.router.navigate(['/list-user']);
      },
      (error: any) => {
        console.log('error');
    }
    );
  }
}
