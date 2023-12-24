import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { Router } from '@angular/router';

import { IResume } from '../models/resume.model';
import { ICreateResume } from '../models/createResume.model';



@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  constructor(private http: HttpClient, private auth: UserService, private router: Router) {
  }



  getPage(page: number) : Observable<any>{
    return this.http.get<any>('http://localhost:8080/api/resumes/all/' + page)
  }

  getMy(page: number) : Observable<any>{
    return this.http.get<any>('http://localhost:8080/api/resumes/my/'+page,this.auth.getCredentials())
  }

  getFavorites(page: number) : Observable<any>{
    return this.http.get<any>('http://localhost:8080/api/resumes/favorites/'+page,this.auth.getCredentials())
  }

  addToFavorites(resume_id: number){
    return this.http.get<any>('http://localhost:8080/api/resumes/favorites/add/'+resume_id,this.auth.getCredentials())
  }

  deleteFromFavorites(resume_id: number){
    return this.http.delete<any>('http://localhost:8080/api/resumes/favorites/delete/'+resume_id,this.auth.getCredentials())
  }

  getFavoriteStatus(id: number){
    return this.http.get<boolean>('http://localhost:8080/api/resumes/favorites/status/'+id,this.auth.getCredentials())
  }

  createResume(resume: ICreateResume): Observable<any>{
    return this.http.post<ICreateResume>('http://localhost:8080/api/resumes/all',resume,this.auth.getCredentials())
  }

  deleteById(id: number){
    console.log("Delete "+id)
    return this.http.delete('http://localhost:8080/api/resumes/my/delete/'+id,this.auth.getCredentials())
  }

  getById(id: number): Observable<IResume>{
    return this.http.get<IResume>('http://localhost:8080/api/resumes/byId/'+id)
  }

  /*.subscribe(response=>{},error=>{
      if(error.status == 200){
        this.router.navigateByUrl('/user/notices')
      }
    })*/

  updateById(id: number,resume: ICreateResume){
    return this.http.put<ICreateResume>('http://localhost:8080/api/resumes/my/update/'+id, resume, this.auth.getCredentials())
  }

  toResponse(resume_id: number){
    return this.http.get<any>('http://localhost:8080/api/resumes/response/'+resume_id,this.auth.getCredentials())
  }
  getResponseStatus(resume_id: number){
    return this.http.get<boolean>('http://localhost:8080/api/resumes/response/status/'+resume_id,this.auth.getCredentials())
  }



}

