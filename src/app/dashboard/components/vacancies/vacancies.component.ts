import { Component, OnInit, Input, AfterContentChecked } from '@angular/core';
import { IVacancy } from '../../../core/models/vacancy.model';
import { IFilter } from '../../../core/models/filter.model';
import { VacancyService } from '../../../core/services/vacancy.service';

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.css']
})
export class VacanciesComponent implements OnInit, AfterContentChecked{
  

  vacancies : IVacancy[] = [];

  //Текущая страница
  current_page: number
  nextActive:boolean
  backActive:boolean

  @Input('filter') filter: IFilter

  constructor(private vacancyService:VacancyService){

  }

  //Подгрузка вакансий при загрузке компонента
  ngOnInit(): void{
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

  ngAfterContentChecked(){
    console.log("2")
  }

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

}
