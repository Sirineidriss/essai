import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Classe } from '../classe.model'


@Injectable({
  providedIn: 'root'
})

export class ClasseService {

  apiURL='http://localhost:1337';

  constructor(private http:HttpClient) { 
    
  }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  // HttpClient API get() method => Fetch classes list
  getClasses(): Observable<Classe> {
    return this.http.get<Classe>(this.apiURL + '/classe')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API get() method => Fetch classe
  getClasse(id:any): Observable<Classe> {
    return this.http.get<Classe>(this.apiURL + '/classe/' + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  

  // HttpClient API post() method => Create classe
  createClasse(classe:any): Observable<Classe> {
    return this.http.post<Classe>(this.apiURL + '/classe', JSON.stringify(classe), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  

  // HttpClient API put() method => Update classe
  updateClasse(id:any, classe:any): Observable<Classe> {
    return this.http.put<Classe>(this.apiURL + '/classe/' + id, JSON.stringify(classe), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API delete() method => Delete classe
  deleteClasse(id:any){
    return this.http.delete<Classe>(this.apiURL + '/classe/' + id, this.httpOptions)
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
   /* getAll(): Observable<any> {
    return this.httpClient.get(baseURL);
  } */
}
