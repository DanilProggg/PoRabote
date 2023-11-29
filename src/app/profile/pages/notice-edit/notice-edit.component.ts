import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule,FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";


import { VacancyService } from '../../../core/services/vacancy.service';


@Component({
  selector: 'app-notice-edit',
  templateUrl: './notice-edit.component.html',
  styleUrls: ['./notice-edit.component.css']
})
export class NoticeEditComponent implements OnInit{

  vacancyEditForm: FormGroup;
  id:number;

  constructor(private router: Router, private activateRoute: ActivatedRoute, private vacancyService: VacancyService){ 
    this.id = activateRoute.snapshot.params["id"];
  }

  ngOnInit(){
     this.vacancyService.getById(this.id).subscribe(response=>{
      this.vacancyEditForm = new FormGroup({
        post: new FormControl(response.post,[Validators.required]),
        organization: new FormControl(response.organization,[Validators.required]),
        salary: new FormControl(response.salary,[Validators.required]),
        city: new FormControl(response.city,[Validators.required]),
        experience: new FormControl(response.experience,[Validators.required]),
        work_time: new FormControl(response.work_time,[Validators.required]),
        description: new FormControl(response.description,[Validators.required])
      })
    })
  }

  delete(){
    this.vacancyService.deleteById(this.id).subscribe(response=>{},error=>{
      if(error.status == 200){
        this.router.navigateByUrl('/user/notices')
      }
    })
  }

  toUpdate(){
    const vacancy = {
      post: this.vacancyEditForm.value.post,
      organization: this.vacancyEditForm.value.organization,
      salary: this.vacancyEditForm.value.salary,
      city: this.vacancyEditForm.value.city,
      experience: this.vacancyEditForm.value.experience,
      work_time: this.vacancyEditForm.value.work_time,
      description: this.vacancyEditForm.value.description
    }
    this.vacancyService.updateById(this.id, vacancy).subscribe(response=>{},error=>{
      if(error.status == 200){
        this.router.navigateByUrl('/user/notices')
      }
    })
    console.log(vacancy)
  }
}
