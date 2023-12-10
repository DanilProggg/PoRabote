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
  image64: string | ArrayBuffer | null;

  constructor(private router: Router, private activateRoute: ActivatedRoute, private vacancyService: VacancyService){ 
    this.id = activateRoute.snapshot.params["id"];
  }

  ngOnInit(){
     this.vacancyService.getById(this.id).subscribe(response=>{
      this.image64 = response.organizationImage64;
      this.vacancyEditForm = new FormGroup({
        post: new FormControl(response.post,[Validators.required]),
        organization: new FormControl(response.organization,[Validators.required]),
        organization_logo_filename: new FormControl(null,[]),
        salary: new FormControl(response.salary,[Validators.required]),
        city: new FormControl(response.city,[Validators.required]),
        experience: new FormControl(response.experience,[Validators.required]),
        work_time: new FormControl(response.work_time,[Validators.required]),
        description: new FormControl(response.description,[Validators.required])
      })
      console.log(response)
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
      organizationImage64: this.image64,
      post: this.vacancyEditForm.value.post,
      organization: this.vacancyEditForm.value.organization,
      organization_logo_filename: this.vacancyEditForm.value.organization_logo_filename,
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

  onFileSelect(event:any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      console.log(file);
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.image64 = reader.result;
        console.log(reader.result);
      };
    }
  }
}
