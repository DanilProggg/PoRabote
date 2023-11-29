import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VacancyService } from '../../../core/services/vacancy.service';

@Component({
  selector: 'app-create-notice',
  templateUrl: './create-notice.component.html',
  styleUrls: ['./create-notice.component.css']
})
export class CreateNoticeComponent implements OnInit{
  vacancyForm: FormGroup


  constructor(private http: HttpClient,private router: Router, private vacancyService:VacancyService){}



  ngOnInit(): void{
    this.vacancyForm = new FormGroup({
      post: new FormControl(null,[Validators.required]),
      organization: new FormControl(null,[Validators.required]),
      salary: new FormControl(null,[Validators.required]),
      city: new FormControl(null,[Validators.required]),
      experience: new FormControl('Нет',[Validators.required]),
      work_time: new FormControl('Полная занятость',[Validators.required]),
      description: new FormControl(null,[Validators.required])
    })
  }


  toCreate(){
    const vacancy = {
      post: this.vacancyForm.value.post,
      organization: this.vacancyForm.value.organization,
      salary: this.vacancyForm.value.salary,
      city: this.vacancyForm.value.city,
      experience: this.vacancyForm.value.experience,
      work_time: this.vacancyForm.value.work_time,
      description: this.vacancyForm.value.description
    }
    this.vacancyService.createVacancy(vacancy).subscribe(response=>{},error=>{
      if(error.status == 200){
        this.router.navigateByUrl('/user/notices')
      }
    })
  }
}
