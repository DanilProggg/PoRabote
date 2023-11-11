import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
/*import { Router } from '@angular/router';*/

@Injectable({
  providedIn: 'root'
})
export class UserService {

  authenticated = false;

  constructor(private http: HttpClient/*,private router: Router*/) {}

  private email = ""
  getEmail(){
    return this.email
  }
  setEmail(email:string):void{
    this.email = email
  }
  private password = ""
   getPassword(){
    return this.password
  }
  setPassword(password:string):void{
    this.password = password
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
            } else{
              
            }
        });

  }
}
