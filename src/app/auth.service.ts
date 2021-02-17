import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Utilisateur} from './utilisateur';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private  loginUrl = 'http://127.0.0.1:8000/api/login';
  constructor(private http: HttpClient, private router: Router) { }
  seConnecter(user: Utilisateur): any{
    return this.http.post<any>(this.loginUrl, user);
  }
  estConnecte(): any{
    return localStorage.getItem('token');
  }
  deConnecter(): any{
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
// loginUser(user: any){
//  return this.http.post<any>(this.loginUrl, user);
//    }
//   getToken(){
//     return localStorage.getItem('token');
//   }
}
