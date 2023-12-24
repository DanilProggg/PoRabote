import { Component } from '@angular/core';
import { IFilter } from '../../../core/models/filter.model';
import { IResume } from '../../../core/models/resume.model';
import { ResumeService } from '../../../core/services/resume.service';

@Component({
  selector: 'app-peoples',
  templateUrl: './peoples.component.html',
  styleUrls: ['./peoples.component.css']
})
export class PeoplesComponent {
  resumes : IResume[] = [];

  current_page: number
  nextActive:boolean
  backActive:boolean

  filter: IFilter
  constructor(private resumeService:ResumeService){

  }

  ngOnInit(): void{
    this.filter = {
      input: "",
      salary: 0,
      age:0,
      city: "",
      workTime: "",
      experience: 100,
    }
      this.current_page = 1
      this.resumeService.getPage(this.current_page-1, this.filter).subscribe( resumes =>{
        this.resumes = resumes.content
        if(resumes.last == true){
          this.nextActive = false
        } else {
          this.nextActive = true
        }
      })
      this.backActive = false
  }


  //filters

  toSearch(){
    this.setInput()
    this.setCity()
    this.setExperience()
      this.resumeService.getPage(this.current_page-1, this.filter).subscribe( response =>{
        this.resumes = response.content
        if(response.last == true){
          this.nextActive = false
        } else {
          this.nextActive = true
        }
      })
  }


  //Filters setups

  setInput(){
    let input = document.getElementById('search-bar') as HTMLInputElement;
    this.filter.input = input.value;
  }

  toClearInput(){
    this.filter.input="";
      this.resumeService.getPage(this.current_page-1, this.filter).subscribe( response =>{
        this.resumes = response.content
        if(response.last == true){
          this.nextActive = false
        } else {
          this.nextActive = true
        }
      })
  }

  setCity(){
    let input = document.getElementById('city') as HTMLInputElement;
    this.filter.city= input.value
    this.resumeService.getPage(this.current_page-1, this.filter).subscribe( response =>{
        this.resumes = response.content
        if(response.last == true){
          this.nextActive = false
        } else {
          this.nextActive = true
        }
      })
  }

  toClearCity(){
    let input = document.getElementById('city') as HTMLInputElement;
    input.value = ""
    this.filter.city=""
    this.resumeService.getPage(this.current_page-1, this.filter).subscribe( response =>{
        this.resumes = response.content
        if(response.last == true){
          this.nextActive = false
        } else {
          this.nextActive = true
        }
      })
  }

  setExperience(){
    let input = document.querySelector('input[name="experience"]:checked') as HTMLInputElement
    this.filter.experience = parseInt(input.value)
    this.resumeService.getPage(this.current_page-1, this.filter).subscribe( response =>{
        this.resumes = response.content
        if(response.last == true){
          this.nextActive = false
        } else {
          this.nextActive = true
        }
      })
  }

  toClearExperience(){
    let input = document.querySelector('input[name="experience"]:checked') as HTMLInputElement
    input.checked = false
    this.filter.experience=100;
    this.resumeService.getPage(this.current_page-1, this.filter).subscribe( response =>{
        this.resumes = response.content
        if(response.last == true){
          this.nextActive = false
        } else {
          this.nextActive = true
        }
      })
  }






  next(){
  this.current_page += 1
  
  this.resumeService.getPage(this.current_page-1, this.filter).subscribe( resumes =>{
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
  
    this.resumeService.getPage(this.current_page-1, this.filter).subscribe( resumes =>{
      this.resumes = resumes.content
      if(resumes.first == true){
        this.backActive = false
      }
    })
    this.nextActive = true
    window.scrollTo(0,0);
  }
}
