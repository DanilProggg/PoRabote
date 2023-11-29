import { Component } from '@angular/core';
import { IVacancy } from '../../../core/models/vacancy.model';
import { VacancyService } from '../../../core/services/vacancy.service';

@Component({
  selector: 'app-favorites-vacancies',
  templateUrl: './favorites-vacancies.component.html',
  styleUrls: ['./favorites-vacancies.component.css']
})
export class FavoritesVacanciesComponent {
  notices : IVacancy[] = [];

  current_page: number
  nextActive:boolean
  backActive:boolean

  constructor(private vacancyService:VacancyService){

  }

  ngOnInit(): void{
    this.current_page = 1
    this.vacancyService.getFavorites(this.current_page-1).subscribe( notices =>{
      this.notices = notices.content
    })
  }

  next(){
    this.current_page += 1
    
    this.vacancyService.getFavorites(this.current_page-1).subscribe( notices =>{
      this.notices = notices.content
      if(notices.last == true){
        this.nextActive = false
      }
    })
    this.backActive = true
    window.scrollTo(0,0);
  }

  back(){
    this.current_page -= 1
  
    this.vacancyService.getFavorites(this.current_page-1).subscribe( notices =>{
      this.notices = notices.content
      if(notices.first == true){
        this.backActive = false
      }
    })
    window.scrollTo(0,0);
  }
}
