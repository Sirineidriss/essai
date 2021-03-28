import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const baseURL='http://localhost:1337/etudiant';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  constructor(private httpClient:HttpClient) { 
    
  }
  /*  readAll(): Observable<any> {
    return this.httpClient.get(baseURL);
  }

   read(id:any): Observable<any> {
    return this.httpClient.get(`${baseURL}/${id}`);
  }

  create(data:any): Observable<any> {
    return this.httpClient.post(baseURL, data);
  }
 
  update(id:any, data:any): Observable<any> {
    return this.httpClient.put(`${baseURL}/${id}`, data);
  }

  delete(id:number): Observable<any> {
    return this.httpClient.delete(`${baseURL}/${id}`);
   // return this.httpClient.delete(this.baseURL+)
  }

  deleteAll(): Observable<any> {
    return this.httpClient.delete(baseURL);
  } 

   searchByName(nom:any): Observable<any> {
    return this.httpClient.get(`${baseURL}?nom=${nom}`);
  }  */
}
