import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from '../../core/services/user.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';



@Component({
  selector: 'main-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,AfterContentChecked{
  constructor(private auth: UserService, private http:HttpClient,private cookieService: CookieService,private router: Router){}

  user: string = ""
  authStatus: boolean


  ngOnInit() {
    if(this.cookieService.check('login')){
      this.user = this.cookieService.get('login')
      this.authStatus = true
    } else {
      this.authStatus = false
    }
  }

  ngAfterContentChecked(){
    if(this.cookieService.check('login')){
      this.user = this.cookieService.get('login')
      this.authStatus = true
    } else {
      this.authStatus = false
      console.log("sad")
    }
  }

  logout(): void{
    this.cookieService.delete('login');
    this.cookieService.delete('password');
    this.authStatus = false
  }

}