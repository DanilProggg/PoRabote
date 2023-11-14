import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from '../../core/services/user.service';
import { CookieService } from 'ngx-cookie-service';



@Component({
  selector: 'main-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,AfterContentChecked{
  constructor(private auth: UserService, private http:HttpClient,private cookieService: CookieService){}

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

  ngAfterContentChecked(){
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
  }

}