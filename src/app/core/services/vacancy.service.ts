import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { Router } from '@angular/router';

import { IVacancy } from '../models/vacancy.model';
import { ICreateVacancy } from '../models/createVacancy.model';
import { IPageVacancy } from '../models/vacancyPage.model';



@Injectable({
  providedIn: 'root'
})
export class VacancyService {

  constructor(private http: HttpClient, private auth: UserService, private router: Router) {
  }


  getAll(): Observable<IVacancy[]>{
    return this.http.get<IVacancy[]>('http://localhost:8080/api/vacancies') //Есть пагинация. Добавить параметр страница
  }


  getPage(page: number) : Observable<IPageVacancy>{
    return this.http.get<IPageVacancy>('http://localhost:8080/api/vacancies/all/' + page)
  }

  getMy() : Observable<IVacancy[]>{
    return this.http.get<IVacancy[]>('http://localhost:8080/api/vacancies/my',this.auth.getCredentials())
  }

  createVacancy(vacancy: ICreateVacancy){
    return this.http.post<ICreateVacancy>('http://localhost:8080/api/vacancies/all',vacancy,this.auth.getCredentials()).subscribe(response=>{},error=>{
      if(error.status == 200){
        this.router.navigateByUrl('/notices')
      }
    })
  }



}

