import { Component, OnInit } from '@angular/core';
import { IVacancy } from '../../../core/models/vacancy.model';
import { VacancyService } from '../../../core/services/vacancy.service';

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.css']
})
export class VacanciesComponent implements OnInit{
  

  vacancies : IVacancy[] = [];

  //Текущая страница
  current_page: number
  nextActive:boolean
  backActive:boolean

  constructor(private vacancyService:VacancyService){

  }

  //Подгрузка вакансий при загрузке компонента
  ngOnInit(): void{
    this.current_page = 1
      this.vacancyService.getPage(this.current_page-1).subscribe( vacancies =>{
        this.vacancies = vacancies.content
        if(vacancies.last == true){
          this.nextActive = false
        } else {
          this.nextActive = true
        }
      })
    this.backActive = false

  }


 next(){
  this.current_page += 1
  
  this.vacancyService.getPage(this.current_page-1).subscribe( vacancies =>{
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
  
    this.vacancyService.getPage(this.current_page-1).subscribe( vacancies =>{
      this.vacancies = vacancies.content
      if(vacancies.first == true){
        this.backActive = false
      }
    })
    this.nextActive = true
    window.scrollTo(0,0);
  }

}
