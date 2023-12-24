import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule,FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import { DatePipe } from '@angular/common';


import { ResumeService } from '../../../core/services/resume.service';
import { UserService } from '../../../core/services/user.service';
import { IUser } from '../../../core/models/user.model';


@Component({
  selector: 'app-resume-edit',
  templateUrl: './resume-edit.component.html',
  styleUrls: ['./resume-edit.component.css'],
  providers:[DatePipe]
})
export class ResumeEditComponent {
  resumeEditForm: FormGroup;
  id:number;
  image64: string | ArrayBuffer | null;

  current_page: number;
  nextActive:boolean;
  backActive:boolean;
  responded: number[];
  users: IUser[] = [];

  constructor(private router: Router, private activateRoute: ActivatedRoute, private resumeService: ResumeService,private date: DatePipe, private userService: UserService){ 
    this.id = activateRoute.snapshot.params["id"];
  }

  ngOnInit(): void{
    this.current_page=1;
    this.resumeService.getById(this.id).subscribe(response=>{
      let msDate = new Date(response.age);
      let date = this.date.transform(msDate, 'yyyy-MM-dd');//Приобразование времени из мс в date
      this.image64 = response.photoImage64;
      this.resumeEditForm = new FormGroup({
        post: new FormControl(response.post,[Validators.required]),
        fullname: new FormControl(response.fullname,[Validators.required]),
        phone: new FormControl(response.phone,[Validators.required]),
        age: new FormControl(date,[Validators.required]),
        sex: new FormControl(response.sex,[Validators.required]),
        city: new FormControl(response.city,[Validators.required]),
        experience: new FormControl(response.experience,[Validators.required]),
        personalQualities: new FormControl(response.personalQualities,[Validators.required]),
        additional: new FormControl(response.additional,[Validators.required])
      })
      this.userService.getUsers(response.responded, this.current_page-1).subscribe(r=>{
        this.users = r.content
        this.responded = response.responded
        if(r.last == true){
          this.nextActive = false
        } else {
          this.nextActive = true
        }
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
      personalQualities: this.resumeEditForm.value.personalQualities,
      additional: this.resumeEditForm.value.additional,
      photoImage64: this.image64,
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

  next(){
  this.current_page += 1
  
  this.userService.getUsers(this.responded, this.current_page-1).subscribe(r=>{
        this.users = r.content
        if(r.last == true){
          this.nextActive = false
        }
      })


  this.backActive = true
 }

 back(){
  this.current_page -= 1
  
    this.userService.getUsers(this.responded, this.current_page-1).subscribe( r =>{
      this.users = r.content
      if(r.first == true){
        this.backActive = false
      }
    })
    this.nextActive = true
  }
}
