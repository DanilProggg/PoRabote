import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ReactiveFormsModule,FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../../../core/services/user.service';
import { IUserUpdate } from '../../../core/models/update-user.model';


@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css'],
  providers: [DatePipe]
})
export class PersonalComponent implements OnInit{
  profileForm: FormGroup
  constructor(private auth: UserService, private router: Router, private date: DatePipe){}

    ngOnInit(){
      this.auth.getUserInfo().subscribe(response=>{
        let msDate = new Date(response.date);
        let date = this.date.transform(msDate, 'yyyy-MM-dd');//Приобразование времени из мс в date



        this.profileForm = new FormGroup({
        fullname: new FormControl(response.fullname,[Validators.required]),
        phone: new FormControl(response.phone,[Validators.required]),
        date: new FormControl(date,[Validators.required]),

        });
        console.log(date)
      })
    }

    toUpdate(){
    let date = new Date(this.profileForm.value.date)
    const info = {
      fullname: this.profileForm.value.fullname,
      phone: this.profileForm.value.phone,
      date: date.getTime()
    }
    this.auth.updateInfo(info).subscribe(response=>{},error=>{
      if(error.status == 200){

        this.router.navigateByUrl('/dashboard')
      }
    })
   }
}
