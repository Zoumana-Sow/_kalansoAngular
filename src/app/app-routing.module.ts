import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ListPromoComponent} from './navbar/parametre/promo/list-promo/list-promo.component';
import {ListUserComponent} from './navbar/users/utilisateurs/list-user/list-user.component';
import {AdminComponent} from './admin/admin.component';
import {AddUserComponent} from './navbar/users/utilisateurs/add-user/add-user.component';
import {AuthGuard} from './auth.guard';
import {LoginGuard} from './login.guard';
import {EditUserComponent} from './navbar/users/utilisateurs/edit-user/edit-user.component';
import {DetailsUserComponent} from './navbar/users/utilisateurs/list-user/details-user/details-user.component';
import {AddGrpcComponent} from './navbar/parametre/groupeCompetences/add-grpc/add-grpc.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'list-promo', component: ListPromoComponent},
  { path: 'list-user', component: ListUserComponent},
  { path: 'add-user', component : AddUserComponent},
  { path: 'list-user/:id/edit-user', component : EditUserComponent},
  { path: 'list-user/:id/details-user', component : DetailsUserComponent},
  { path: 'add-grpc', component : AddGrpcComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
