import { Component } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import { IResume } from '../../../core/models/resume.model';
import { ResumeService } from '../../../core/services/resume.service';

@Component({
  selector: 'app-resume-page',
  templateUrl: './resume-page.component.html',
  styleUrls: ['./resume-page.component.css']
})
export class ResumePageComponent {
  id:number;
  resume: IResume;
  responsed: boolean;
  favorite: boolean;

  constructor(private router: Router,private activateRoute: ActivatedRoute,private resumeService:ResumeService){ 
    this.id = activateRoute.snapshot.params["id"];
  }

  ngOnInit(){

    this.resumeService.getById(this.id).subscribe(response=>{
      this.resume = response
      this.resumeService.getResponseStatus(this.id).subscribe(r=>{
        this.responsed = r
      })

      this.resumeService.getFavoriteStatus(this.id).subscribe(r=>{
        this.favorite = r
      })  
    },error=>{
      if(error.status != 200){// при ошибке перенаправление на главную страницу
        this.router.navigateByUrl('/dashboard')
      }
    })
  }

  toResponse(){
    this.responsed = true
    this.resumeService.toResponse(this.id).subscribe(response=>{
      this.resumeService.getResponseStatus(this.id).subscribe(r=>{
        this.responsed = r
      })
    },error=>{})
  }

  clickFavorite(){
    if(!this.favorite){
      this.toFavorite()
    } else {
      this.fromFavorite()
    }

    this.favorite = !this.favorite
  }

  toFavorite(){
    this.resumeService.addToFavorites(this.id).subscribe(response=>{})
  }

  fromFavorite(){
    this.resumeService.deleteFromFavorites(this.id).subscribe(response=>{})
  }
}
