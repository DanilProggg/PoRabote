import { Component, OnInit, DoCheck } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { UserService } from '../../core/services/user.service';
import { CookieService } from 'ngx-cookie-service';



@Component({
  selector: 'main-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,DoCheck{
  constructor(private auth: UserService, private http:HttpClient,private cookieService: CookieService,private router: Router){}

  user: string = ""
  authStatus: boolean //Для вывода кнопки "Войти" или Email


  ngOnInit() {
    if(this.cookieService.check('login')){
      this.user = this.cookieService.get('login')
      this.authStatus = true
    } else {
      this.authStatus = false
    }
  }

  ngDoCheck(){
    if(this.cookieService.check('login')){
      this.user = this.cookieService.get('login')
      this.authStatus = true
    } else {
      this.authStatus = false
    }
  }

  logout(): void{
    this.cookieService.delete('login');
    this.cookieService.delete('password');
    this.authStatus = false
    this.router.navigateByUrl('/')
    this.ngOnInit()
  }

}