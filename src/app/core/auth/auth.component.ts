import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit{
  login : FormGroup
  reg : FormGroup

  login_page = true

  constructor(private auth: UserService,private http: HttpClient,private router: Router){}
   
  
  
  ngOnInit(){
    this.login = new FormGroup({
      email: new FormControl(null,[Validators.required, Validators.email]),
      password: new FormControl(null,[Validators.required])
    })

    this.reg = new FormGroup({
      email: new FormControl(null,[Validators.required, Validators.email]),
      password: new FormControl(null,[Validators.required, Validators.minLength(8)])
    })
  }


  //Для переключения страниц регистрации и входа
  toReg(){
    this.login_page = false
  }
  toLogin(){
    this.login_page = true
  }
  //При нажатии регистрация
  onSubmitReg(){
    this
  }
   //При нажатии вход
  onSubmitLogin(){
    this.auth.authenticate(this.login.value.email,this.login.value.password)
    this.router.navigateByUrl("/dashboard")
  }

}
