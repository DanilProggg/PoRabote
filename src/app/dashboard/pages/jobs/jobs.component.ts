import { Component, OnInit, HostListener } from '@angular/core';

import { IVacancy } from '../../../core/models/vacancy.model';
import { IFilter } from '../../../core/models/filter.model';
import { VacancyService } from '../../../core/services/vacancy.service';


@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  vacancies : IVacancy[] = [];

  //Текущая страница
  current_page: number
  nextActive:boolean
  backActive:boolean

  filter: IFilter

  filterActive: boolean
  innerWidth:any

  constructor(private vacancyService:VacancyService){

  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if(window.innerWidth > 767){
      this.filterActive = true
    } else {
      this.filterActive = false
    }
  }

  ngOnInit(){
    this.filterActive=true
    this.filter = {
      input: "",
      salary: 0,
      age:0,
      city: "",
      workTime: "",
      experience: 100,
    } 

    this.current_page = 1
      this.vacancyService.getPage(this.current_page-1, this.filter).subscribe( vacancies =>{
        this.vacancies = vacancies.content
        if(vacancies.last == true){
          this.nextActive = false
        } else {
          this.nextActive = true
        }
      })
    this.backActive = false
  }


  toSearch(){
    this.setInput()
    this.setSalary()
    this.setCity()
    this.setWorkTime()
    this.setExperience()
      this.vacancyService.getPage(this.current_page-1, this.filter).subscribe( vacancies =>{
        this.vacancies = vacancies.content
        if(vacancies.last == true){
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
      this.vacancyService.getPage(this.current_page-1, this.filter).subscribe( vacancies =>{
        this.vacancies = vacancies.content
        if(vacancies.last == true){
          this.nextActive = false
        } else {
          this.nextActive = true
        }
      })
  }

  setSalary(){
    let input = document.getElementById('salary') as HTMLInputElement;
    this.filter.salary= parseInt(input.value)
    this.vacancyService.getPage(this.current_page-1, this.filter).subscribe( vacancies =>{
        this.vacancies = vacancies.content
        if(vacancies.last == true){
          this.nextActive = false
        } else {
          this.nextActive = true
        }
      })
  }

  toClearSalary(){
    let input = document.getElementById('salary') as HTMLInputElement;
    input.value = ""
    this.filter.salary=0;
      this.vacancyService.getPage(this.current_page-1, this.filter).subscribe( vacancies =>{
        this.vacancies = vacancies.content
        if(vacancies.last == true){
          this.nextActive = false
        } else {
          this.nextActive = true
        }
      })
  }


  setCity(){
    let input = document.getElementById('city') as HTMLInputElement;
    this.filter.city= input.value
    this.vacancyService.getPage(this.current_page-1, this.filter).subscribe( vacancies =>{
        this.vacancies = vacancies.content
        if(vacancies.last == true){
          this.nextActive = false
        } else {
          this.nextActive = true
        }
      })
  }

  toClearCity(){
    let input = document.getElementById('city') as HTMLInputElement;
    input.value = ""
    this.filter.city="";
      this.vacancyService.getPage(this.current_page-1, this.filter).subscribe( vacancies =>{
        this.vacancies = vacancies.content
        if(vacancies.last == true){
          this.nextActive = false
        } else {
          this.nextActive = true
        }
      })
  }

  setWorkTime(){
    let input = document.querySelector('input[name="work_time"]:checked') as HTMLInputElement
    this.filter.workTime=input.value
    this.vacancyService.getPage(this.current_page-1, this.filter).subscribe( vacancies =>{
        this.vacancies = vacancies.content
        if(vacancies.last == true){
          this.nextActive = false
        } else {
          this.nextActive = true
        }
      })
  }

  toClearWorkTime(){
    let input = document.querySelector('input[name="work_time"]:checked') as HTMLInputElement
    input.checked = false
    this.filter.workTime="";
    this.vacancyService.getPage(this.current_page-1, this.filter).subscribe( vacancies =>{
        this.vacancies = vacancies.content
        if(vacancies.last == true){
          this.nextActive = false
        } else {
          this.nextActive = true
        }
      })
  }

  setExperience(){
    let input = document.querySelector('input[name="experience"]:checked') as HTMLInputElement
    this.filter.experience = parseInt(input.value)
    this.vacancyService.getPage(this.current_page-1, this.filter).subscribe( vacancies =>{
      this.vacancies = vacancies.content
      if(vacancies.last == true){
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
    this.vacancyService.getPage(this.current_page-1, this.filter).subscribe( vacancies =>{
      this.vacancies = vacancies.content
      if(vacancies.last == true){
        this.nextActive = false
      } else {
        this.nextActive = true
      }
    })
  }

  //pagination
  next(){
  this.current_page += 1
  
  this.vacancyService.getPage(this.current_page-1,this.filter).subscribe( vacancies =>{
    this.vacancies = vacancies.content
    if(vacancies.last == true){
      this.nextActive = false
    }
  })
  this.backActive = true
  window.scrollTo(0,0);
  }

  back(){
  this.current_page -= 1
  
    this.vacancyService.getPage(this.current_page-1, this.filter).subscribe( vacancies =>{
      this.vacancies = vacancies.content
      if(vacancies.first == true){
        this.backActive = false
      }
    })
    this.nextActive = true
    window.scrollTo(0,0);
  }


  toggle(){
    this.filterActive = !this.filterActive
  }
}
