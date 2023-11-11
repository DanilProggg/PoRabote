import { Component, OnInit} from '@angular/core';
import { IVacancy } from '../../../core/models/vacancy.model';
import { VacancyService } from '../../../core/services/vacancy.service';

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.css']
})
export class VacanciesComponent implements OnInit{
  

  vacancies : IVacancy[] = [];

  constructor(private vacancyService:VacancyService){

  }

  //Подгрузка вакансий при загрузке компонента
  ngOnInit(): void{
      this.vacancyService.getAll().subscribe( vacancies =>{
        this.vacancies = vacancies
      })
  }
  

}
