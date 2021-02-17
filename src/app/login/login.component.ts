import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import jwt_decode from 'jwt-decode';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  loginForm: FormGroup;
  isSubmitted  =  false;
  email = new FormControl();
  constructor(private auth: AuthService, private  router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm  =  this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  // tslint:disable-next-line:typedef
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  // tslint:disable-next-line:typedef
  get formControls() { return this.loginForm.controls; }
  // tslint:disable-next-line:typedef
  seConnecter(){
    this.auth.seConnecter(this.loginForm.value)
      .subscribe(
              res => {
                console.log(res);
                localStorage.setItem('token', res.token);
                const decoded = jwt_decode(res.token);
                const role = decoded['roles'];
                localStorage.setItem('roles', decoded['roles']);
                // tslint:disable-next-line:triple-equals
                if (role == 'ROLE_Admin'){
                  this.router.navigate(['admin']);
                }else if (role == 'ROLE_Apprenant'){
                  this.router.navigate(['apprenant']);
                }else if (role == 'ROLE_CM'){
                  this.router.navigate(['CM']);
                }else if (role == 'ROLE_Formateur'){
                  this.router.navigate(['formateur']);
                }
              },
              error => console.log(error)
            );
  }

}
