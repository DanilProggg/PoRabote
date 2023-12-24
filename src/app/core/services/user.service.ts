import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

import { IUser } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userDoesntExist: boolean = false //Ошибка о несуществующем пользователе

  constructor(private http: HttpClient,private cookieService: CookieService,private router: Router) {}

  private email = ""
  public getEmail(): string{
    return this.email;
  }
  setEmail(email:string):void{
    this.email = email;
  }

  private password = ""
  public getPassword(): string{
    return this.password;
  }
  setPassword(password:string):void{
    this.password = password;
  }

  authenticate(email:string,password:string) {

        const header = {
          headers: new HttpHeaders()
            .set('Authorization',  'Basic ' + btoa(email + ':' + password))
        }

        this.http.get('http://localhost:8080/api/user', header).subscribe(response => {
            if(response){
              this.setEmail(email)
              this.setPassword(password)
              this.cookieService.set('login', this.getEmail());
              this.cookieService.set('password', this.getPassword());
              this.router.navigateByUrl("/dashboard")
              this.userDoesntExist = false
            }
          },
          (error)=>{
              if(error.status != 200){
                this.userDoesntExist = true
              }
          }
        );

  }

  getCredentials(){
    const header = {
      headers: new HttpHeaders()
        .set('Authorization',  'Basic ' + btoa(this.cookieService.get('login') + ':' + this.cookieService.get('password')))
    }
    return header;
  }

  getUserInfo(): Observable<any>{
    return this.http.get<any>('http://localhost:8080/api/user', this.getCredentials())
  }

  updateInfo(userInfo: any){
    return this.http.post<any>('http://localhost:8080/api/user',userInfo,this.getCredentials())
  }

  getUsers(list: number[], page: number){
    return this.http.post<any>('http://localhost:8080/api/users/'+page,list,this.getCredentials())
  }
}
