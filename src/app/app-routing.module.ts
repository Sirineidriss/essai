import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { CustomerComponent} from './components/customer/customer.component';
import {LoginformComponent} from './loginform/loginform.component';
import {EtudiantCreateComponent} from './components/etudiant-create/etudiant-create.component';
import {EtudiantDetailsComponent} from './components/etudiant-details/etudiant-details.component';
import{EtudiantListComponent} from './components/etudiant-list/etudiant-list.component';
import { ClasseComponent } from './components/classe/classe.component';
import { EtudiantEditComponent } from './components/etudiant-edit/etudiant-edit.component';
const routes: Routes = [
  /* {
    path:'', component:LoginformComponent ,
  }, */
  /* {
    path:'customer',
    component:CustomerComponent
  }, */
  //  {
  //   path:'loginform', component:LoginformComponent/*  redirectTo: '/loginform', pathMatch: 'full' */
  // },
  { path:'', pathMatch:'full',redirectTo:'create-etudiant'},
  {
    path:'create-etudiant', component:EtudiantCreateComponent

    //path:'create', component:EtudiantCreateComponent
  },
/*   {
    path:'etudiant/:id', component:EtudiantDetailsComponent
  }, */
  {
    //path:'etudiants', component:EtudiantListComponent
    path:'etudiant-list', component:EtudiantListComponent

  },
 /*  {
    path:'classe', component:ClasseComponent
  }, */
  {
    path:'etudiant-edit/:id', component:EtudiantEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
