import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddUserComponent } from './navbar/users/utilisateurs/add-user/add-user.component';
import { ListUserComponent } from './navbar/users/utilisateurs/list-user/list-user.component';
import { DetailsUserComponent } from './navbar/users/utilisateurs/list-user/details-user/details-user.component';
import { EditUserComponent } from './navbar/users/utilisateurs/edit-user/edit-user.component';
import { AddProfilComponent } from './navbar/users/profils/add-profil/add-profil.component';
import { ListProfilComponent } from './navbar/users/profils/list-profil/list-profil.component';
import { DetailsProfilComponent } from './navbar/users/profils/list-profil/details-profil/details-profil.component';
import { EditProfilComponent } from './navbar/users/profils/edit-profil/edit-profil.component';
import { AddPromoComponent } from './navbar/parametre/promo/add-promo/add-promo.component';
import { ListPromoComponent } from './navbar/parametre/promo/list-promo/list-promo.component';
import { AddRefComponent } from './navbar/parametre/referentiel/add-ref/add-ref.component';
import { ListRefComponent } from './navbar/parametre/referentiel/list-ref/list-ref.component';
import { DetailsRefComponent } from './navbar/parametre/referentiel/list-ref/details-ref/details-ref.component';
import { EditRefComponent } from './navbar/parametre/referentiel/edit-ref/edit-ref.component';
import { AddGrpcComponent } from './navbar/parametre/groupeCompetences/add-grpc/add-grpc.component';
import { EditGrpcComponent } from './navbar/parametre/groupeCompetences/edit-grpc/edit-grpc.component';
import { ListGrpcComponent } from './navbar/parametre/groupeCompetences/list-grpc/list-grpc.component';
import { DetailsGrpcComponent } from './navbar/parametre/groupeCompetences/list-grpc/details-grpc/details-grpc.component';
import { AddCompetenceComponent } from './navbar/parametre/competences/add-competence/add-competence.component';
import { EditCompetenceComponent } from './navbar/parametre/competences/edit-competence/edit-competence.component';
import { ListCompetenceComponent } from './navbar/parametre/competences/list-competence/list-competence.component';
import { DetailsCompetComponent } from './navbar/parametre/competences/list-competence/details-compet/details-compet.component';
import { AddProfilSortieComponent } from './navbar/parametre/profil-sortie/add-profil-sortie/add-profil-sortie.component';
import { EditProfilSortieComponent } from './navbar/parametre/profil-sortie/edit-profil-sortie/edit-profil-sortie.component';
import { DetailsPrflSortieComponent } from './navbar/parametre/profil-sortie/list-profil-sortie/details-prfl-sortie/details-prfl-sortie.component';
import {AngularMaterialModule} from './angular-material/angular-material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AdminComponent } from './admin/admin.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {InterceptorProvider} from './Interceptor/interceptor.service';
import {NgxPaginationModule} from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    AddUserComponent,
    ListUserComponent,
    DetailsUserComponent,
    EditUserComponent,
    AddProfilComponent,
    ListProfilComponent,
    DetailsProfilComponent,
    EditProfilComponent,
    AddPromoComponent,
    ListPromoComponent,
    AddRefComponent,
    ListRefComponent,
    DetailsRefComponent,
    EditRefComponent,
    AddGrpcComponent,
    EditGrpcComponent,
    ListGrpcComponent,
    DetailsGrpcComponent,
    AddCompetenceComponent,
    EditCompetenceComponent,
    ListCompetenceComponent,
    DetailsCompetComponent,
    AddProfilSortieComponent,
    EditProfilSortieComponent,
    DetailsPrflSortieComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxPaginationModule,
    NgbModule
  ],
  providers: [InterceptorProvider],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }


