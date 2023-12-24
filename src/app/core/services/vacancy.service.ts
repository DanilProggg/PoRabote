import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { Router } from '@angular/router';

import { IFilter } from '../models/filter.model';
import { IVacancy } from '../models/vacancy.model';
import { ICreateVacancy } from '../models/createVacancy.model';



@Injectable({
  providedIn: 'root'
})
export class VacancyService {

  constructor(private http: HttpClient, private auth: UserService, private router: Router) {
  }

  getPage(page: number, filter: IFilter) : Observable<any>{
    return this.http.post<any>('http://localhost:8080/api/vacancies/all/' + page, filter)
  }

  getMy(page: number) : Observable<any>{
    return this.http.get<any>('http://localhost:8080/api/vacancies/my/'+page,this.auth.getCredentials())
  }
  
  getFavorites(page: number) : Observable<any>{
    return this.http.get<any>('http://localhost:8080/api/vacancies/favorites/'+page,this.auth.getCredentials())
  }

  getFavoriteStatus(id: number){
    return this.http.get<boolean>('http://localhost:8080/api/vacancies/favorites/status/'+id,this.auth.getCredentials())
  }

  addToFavorites(vacancy_id: number){
    return this.http.get<any>('http://localhost:8080/api/vacancies/favorites/add/'+vacancy_id,this.auth.getCredentials())
  }

  deleteFromFavorites(vacancy_id: number){
    return this.http.delete<any>('http://localhost:8080/api/vacancies/favorites/delete/'+vacancy_id,this.auth.getCredentials())
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

  toResponse(vacancy_id: number){
    return this.http.get<any>('http://localhost:8080/api/vacancies/response/'+vacancy_id,this.auth.getCredentials())
  }
  getResponseStatus(vacancy_id: number){
    return this.http.get<boolean>('http://localhost:8080/api/vacancies/response/status/'+vacancy_id,this.auth.getCredentials())
  }

}

