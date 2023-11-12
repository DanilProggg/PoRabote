import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
/*import { Router } from '@angular/router';*/

@Injectable({
  providedIn: 'root'
})
export class UserService {

  authenticated = false;

  constructor(private http: HttpClient,private cookieService: CookieService/*,private router: Router*/) {}

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
              this.authenticated = true
              this.cookieService.set('login', this.getEmail());
              this.cookieService.set('password', this.getPassword());
            }
        });

  }
}
