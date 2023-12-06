import { Component } from '@angular/core';
import { IResume } from '../../../core/models/resume.model';
import { ResumeService } from '../../../core/services/resume.service';

@Component({
  selector: 'app-favorites-resumes',
  templateUrl: './favorites-resumes.component.html',
  styleUrls: ['./favorites-resumes.component.css']
})
export class FavoritesResumesComponent {
  resumes : IResume[] = [];

  current_page: number
  nextActive:boolean
  backActive:boolean

  constructor(private resumeService:ResumeService){

  }

  ngOnInit(): void{
      this.current_page = 1
      this.resumeService.getFavorites(this.current_page-1).subscribe( resumes =>{
        this.resumes = resumes.content
        if(resumes.last == true){
          this.nextActive = false
        } else {
          this.nextActive = true
        }
      })
      this.backActive = false
  }

  next(){
  this.current_page += 1
  
  this.resumeService.getFavorites(this.current_page-1).subscribe( resumes =>{
    this.resumes = resumes.content
    if(resumes.last == true){
      this.nextActive = false
    }
  })
  this.backActive = true
  window.scrollTo(0,0);
 }

 back(){
  this.current_page -= 1
  
    this.resumeService.getFavorites(this.current_page-1).subscribe( resumes =>{
      this.resumes = resumes.content
      if(resumes.first == true){
        this.backActive = false
      }
    })
  window.scrollTo(0,0);
  }
}
