import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ResumeService } from '../../../core/services/resume.service';
import { UserService } from '../../../core/services/user.service';

@Component({
  selector: 'app-create-resume',
  templateUrl: './create-resume.component.html',
  styleUrls: ['./create-resume.component.css']
})
export class CreateResumeComponent implements OnInit{
  resumeForm: FormGroup


  constructor(private http: HttpClient,private router: Router, private resumeService:ResumeService, private auth: UserService){}



  ngOnInit(): void{
    this.auth.getUserInfo().subscribe(response=>{
      this.resumeForm = new FormGroup({
        post: new FormControl(null,[Validators.required]),
        fullname: new FormControl(response.fullname,[Validators.required]),
        phone: new FormControl(response.phone,[Validators.required]),
        sex: new FormControl(null,[Validators.required]),
        age: new FormControl(null,[Validators.required]),
        city: new FormControl(null,[Validators.required]),
        experience: new FormControl('Нет',[Validators.required]),
        personal_qualities: new FormControl(null,[Validators.required]),
        additional: new FormControl('Нет',[Validators.required])
      })
      console.log(response)
    })
  }


  toCreate(){
    const resume = {
      post: this.resumeForm.value.post,
      fullname: this.resumeForm.value.fullname,
      phone: this.resumeForm.value.phone,
      sex: this.resumeForm.value.sex,
      age: this.resumeForm.value.age.Date(),
      city: this.resumeForm.value.city,
      experience: this.resumeForm.value.experience,
      personal_qualities: this.resumeForm.value.personal_qualities,
      additional: this.resumeForm.value.additional,
    }
    this.resumeService.createResume(resume).subscribe(response=>{},error=>{
      if(error.status == 200){
        this.router.navigateByUrl('/user/resumes')
      }
    })
  }
}
