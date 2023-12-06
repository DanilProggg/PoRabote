import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { IVacancy } from '../../../core/models/vacancy.model';
import { VacancyService } from '../../../core/services/vacancy.service';


@Component({
  selector: 'app-vacancy-page',
  templateUrl: './vacancy-page.component.html',
  styleUrls: ['./vacancy-page.component.css']
})
export class VacancyPageComponent implements OnInit{
  id:number;
  vacancy: IVacancy;

  constructor(private router: Router,private activateRoute: ActivatedRoute,private vacancyService:VacancyService){ 
    this.id = activateRoute.snapshot.params["id"];
  }

  ngOnInit(){
    this.vacancyService.getById(this.id).subscribe(response=>{
      this.vacancy = response
      console.log(this.vacancy)
    },error=>{
      if(error.status != 200){// при ошибке перенапроавление на главную страницу
        this.router.navigateByUrl('/dashboard')
      }
    })  
    
  }
}
