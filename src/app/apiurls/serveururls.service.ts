import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Etudiant } from '../etudiant.model';

@Injectable({
  providedIn: 'root'
})
export class ServeururlsService {
  apiURL='http://localhost:1337'
  constructor(private http: HttpClient) { }

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  // HttpClient API get() method => Fetch employees list
  getEtudiants(): Observable<Etudiant> {
    return this.http.get<Etudiant>(this.apiURL + '/etudiant')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API get() method => Fetch etudiant
  getEtudiant(id:any): Observable<Etudiant> {
    return this.http.get<Etudiant>(this.apiURL + '/etudiant/' + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  

  // HttpClient API post() method => Create etudiant
  createEtudiant(etudiant:any): Observable<Etudiant> {
    return this.http.post<Etudiant>(this.apiURL + '/etudiant', JSON.stringify(etudiant), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  

  // HttpClient API put() method => Update etudiant
  updateEtudiant(id:any, etudiant:any): Observable<Etudiant> {
    return this.http.put<Etudiant>(this.apiURL + '/etudiant/' + id, JSON.stringify(etudiant), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API delete() method => Delete etudiant
  deleteEmployee(id:any){
    return this.http.delete<Etudiant>(this.apiURL + '/etudiant/' + id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // Error handling 
  handleError(error:any) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     window.alert(errorMessage);
     return throwError(errorMessage);
  }

}
