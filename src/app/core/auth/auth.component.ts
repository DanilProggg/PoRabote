import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { HttpClient } from '@angular/common/http';
/*import { Router } from '@angular/router';*/

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit{
  form : FormGroup

  constructor(private auth: UserService,private http: HttpClient/*,private router: Router*/){}
   
  
  
  ngOnInit(){
    this.form = new FormGroup({
      email: new FormControl(null,[Validators.required, Validators.email]),
      password: new FormControl(null,[Validators.required, Validators.minLength(8)])
    })
  }

  onSubmit(){
    this.auth.authenticate(this.form.value.email,this.form.value.password);
  }

}
