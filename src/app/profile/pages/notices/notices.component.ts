import { Component,  OnInit } from '@angular/core';
import { IVacancy } from '../../../core/models/vacancy.model';
import { VacancyService } from '../../../core/services/vacancy.service';

@Component({
  selector: 'app-notices',
  templateUrl: './notices.component.html',
  styleUrls: ['./notices.component.css']
})
export class NoticesComponent implements OnInit{

  notices : IVacancy[] = [];

  constructor(private vacancyService:VacancyService){

  }

  ngOnInit(): void{
      this.vacancyService.getMy().subscribe( notices =>{
        this.notices = notices
      })
  }
}
