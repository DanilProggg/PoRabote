import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { Router } from '@angular/router';

import { IVacancy } from '../models/vacancy.model';
import { ICreateVacancy } from '../models/createVacancy.model';



@Injectable({
  providedIn: 'root'
})
export class VacancyService {

  constructor(private http: HttpClient, private auth: UserService, private router: Router) {
  }

  getPage(page: number) : Observable<any>{
    return this.http.get<any>('http://localhost:8080/api/vacancies/all/' + page)
  }

  getMy(page: number) : Observable<any>{
    return this.http.get<any>('http://localhost:8080/api/vacancies/my/'+page,this.auth.getCredentials())
  }
  
  getFavorites(page: number) : Observable<any>{
    return this.http.get<any>('http://localhost:8080/api/vacancies/favorites/'+page,this.auth.getCredentials())
  }


  getById(id: number): Observable<IVacancy>{
    return this.http.get<IVacancy>('http://localhost:8080/api/vacancies/byId/'+id)
  }

  deleteById(id: number){
    console.log("Delete "+id)
    return this.http.delete('http://localhost:8080/api/vacancies/my/delete/'+id,this.auth.getCredentials())
  }

  createVacancy(vacancy: ICreateVacancy){
    return this.http.post<ICreateVacancy>('http://localhost:8080/api/vacancies/all',vacancy,this.auth.getCredentials())
  }

  updateById(id: number,vacancy: ICreateVacancy){
    return this.http.put<ICreateVacancy>('http://localhost:8080/api/vacancies/my/update/'+id, vacancy, this.auth.getCredentials())
  }

}

