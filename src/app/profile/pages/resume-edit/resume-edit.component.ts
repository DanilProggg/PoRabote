import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule,FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";


import { ResumeService } from '../../../core/services/resume.service';


@Component({
  selector: 'app-resume-edit',
  templateUrl: './resume-edit.component.html',
  styleUrls: ['./resume-edit.component.css']
})
export class ResumeEditComponent {
  resumeEditForm: FormGroup;
  id:number;
  image64: string | ArrayBuffer | null

  constructor(private router: Router, private activateRoute: ActivatedRoute, private resumeService: ResumeService){ 
    this.id = activateRoute.snapshot.params["id"];
  }

  ngOnInit(): void{
    this.resumeService.getById(this.id).subscribe(response=>{
      this.image64 = response.photoImage64;
      this.resumeEditForm = new FormGroup({
        post: new FormControl(response.post,[Validators.required]),
        fullname: new FormControl(response.fullname,[Validators.required]),
        phone: new FormControl(response.phone,[Validators.required]),
        age: new FormControl(response.age,[Validators.required]),
        sex: new FormControl(response.sex,[Validators.required]),
        city: new FormControl(response.city,[Validators.required]),
        experience: new FormControl(response.experience,[Validators.required]),
        personal_qualities: new FormControl(response.personal_qualities,[Validators.required]),
        additional: new FormControl(response.additional,[Validators.required])
      })
      console.log(response) 
    })
    
  }

  delete(){
    this.resumeService.deleteById(this.id).subscribe(response=>{},error=>{
      if(error.status == 200){
        this.router.navigateByUrl('/user/resumes')
      }
    })
  }

  toUpdate(){
    const resume = {
      post: this.resumeEditForm.value.post,
      fullname: this.resumeEditForm.value.fullname,
      phone: this.resumeEditForm.value.phone,
      sex: this.resumeEditForm.value.sex,
      age: this.resumeEditForm.value.age,
      city: this.resumeEditForm.value.city,
      experience: this.resumeEditForm.value.experience,
      personal_qualities: this.resumeEditForm.value.personal_qualities,
      additional: this.resumeEditForm.value.additional
    }
    this.resumeService.updateById(this.id, resume).subscribe(response=>{},error=>{
      if(error.status == 200){
        this.router.navigateByUrl('/user/resumes')
      }
    })
  }

  onFileSelect(event:any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      console.log(file);
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.image64 = reader.result;
        console.log(this.image64);
      };
    }
  }
}
