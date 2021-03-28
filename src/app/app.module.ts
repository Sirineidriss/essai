import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import{CustomerComponent } from './components/customer/customer.component';
import { LoginformComponent } from './loginform/loginform.component';
import { FormsModule  } from "@angular/forms";
import { EtudiantCreateComponent } from './components/etudiant-create/etudiant-create.component';
import { EtudiantDetailsComponent } from './components/etudiant-details/etudiant-details.component';
import { EtudiantListComponent } from './components/etudiant-list/etudiant-list.component';
import { ClasseEtuComponent } from './classe-etu/classe-etu.component';
import { ClasseComponent } from './components/classe/classe.component';
import { EtudiantEditComponent } from './components/etudiant-edit/etudiant-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import '~@angular/material/prebuilt-themes/deeppurple-amber.css';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    BlogComponent,
    ContactComponent,
    PortfolioComponent,
    FeedbackComponent,
    FooterComponent,
    CustomerComponent,
    LoginformComponent,
    EtudiantCreateComponent,
    EtudiantDetailsComponent,
    EtudiantListComponent,
    ClasseEtuComponent,
    ClasseComponent,
    EtudiantEditComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
