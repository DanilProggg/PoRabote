import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IVacancy } from '../models/vacancy.model';



@Injectable({
  providedIn: 'root'
})
export class VacancyService {

  constructor(private http: HttpClient) {
  }


  getAll(): Observable<IVacancy[]>{
    return this.http.get<IVacancy[]>('http://localhost:8080/api/vacancies')
  }

}

