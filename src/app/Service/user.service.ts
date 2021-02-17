import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Utilisateur} from '../utilisateur';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
id: number;

  private users: Utilisateur [];
  constructor(private http: HttpClient) { }
  private  userUrl = 'http://127.0.0.1:8000/api/admin/users?archivage=false';
  private  addUrl = 'http://127.0.0.1:8000/api/admin/users';
  private userByIdUrl = 'http://127.0.0.1:8000/api/admin/users';
  getUsers(): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(this.userUrl);
  }
  addUse(user: any): any {
    return this.http.post<any>(this.addUrl, user);
  }
   getOne(id: number): Observable<Utilisateur> {
     return this.http.get<Utilisateur>(`${this.userByIdUrl}/${id}`);
   }
   editUser(user: FormData): any {
    return this.http.post<any>(`${this.addUrl}/${user.get('id')}`, user);
   }
}
