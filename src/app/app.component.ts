import { Component } from '@angular/core';
import {AuthService} from './auth.service';
import {NgxPaginationModule} from 'ngx-pagination';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularSA-fil-rouge';
  isconnect = false;

  constructor(private auth: AuthService) {
  }
  estConnecter() {
    return this.auth.estConnecte();
  }
}
