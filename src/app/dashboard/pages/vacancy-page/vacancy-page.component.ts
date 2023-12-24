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
  responsed: boolean;
  favorite: boolean;

  constructor(private router: Router,private activateRoute: ActivatedRoute,private vacancyService:VacancyService){ 
    this.id = activateRoute.snapshot.params["id"];
  }

  ngOnInit(){
    this.responsed = false
    this.vacancyService.getById(this.id).subscribe(response=>{
      console.log(response)
      this.vacancyService.getResponseStatus(this.id).subscribe(r=>{
        this.responsed = r

      })

      this.vacancyService.getFavoriteStatus(this.id).subscribe(r=>{
        this.favorite = r
      })     
      this.vacancy = response
    },error=>{
      if(error.status != 200){// при ошибке перенапроавление на главную страницу
        this.router.navigateByUrl('/dashboard')
      }
    })  
    
  }

  toResponse(){
    this.responsed = true
    this.vacancyService.toResponse(this.id).subscribe(response=>{
      this.vacancyService.getResponseStatus(this.id).subscribe(r=>{
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
    this.vacancyService.addToFavorites(this.id).subscribe(response=>{})
  }

  fromFavorite(){
    this.vacancyService.deleteFromFavorites(this.id).subscribe(response=>{})
  }
}
