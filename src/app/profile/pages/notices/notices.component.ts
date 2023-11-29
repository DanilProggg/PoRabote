import { Component,  OnInit } from '@angular/core';
import { IVacancy } from '../../../core/models/vacancy.model';
import { VacancyService } from '../../../core/services/vacancy.service';
import { NoticesItemComponent } from '../../components/notices-item/notices-item.component';

@Component({
  selector: 'app-notices',
  templateUrl: './notices.component.html',
  styleUrls: ['./notices.component.css']
})
export class NoticesComponent implements OnInit{

  notices : IVacancy[] = [];

  current_page: number
  nextActive:boolean
  backActive:boolean

  constructor(private vacancyService:VacancyService){

  }

  ngOnInit(): void{
      this.current_page = 1
      this.vacancyService.getMy(this.current_page-1).subscribe( notices =>{
        this.notices = notices.content
        if(notices.last == true){
          this.nextActive = false
        }
      })
      this.backActive = false
  }





  next(){
  this.current_page += 1
  
  this.vacancyService.getMy(this.current_page-1).subscribe( notices =>{
    this.notices = notices.content
  })
  window.scrollTo(0,0);
 }

 back(){
  this.current_page -= 1
  this.vacancyService.getMy(this.current_page-1).subscribe( notices =>{
    this.notices = notices.content
  })
  window.scrollTo(0,0);
  }

}
