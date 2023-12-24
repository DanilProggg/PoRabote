import { IFilter } from '../../../core/models/filter.model';
import { Component, OnInit, AfterContentChecked, Input, ViewChild } from '@angular/core';
import { VacanciesComponent } from '../../components/vacancies/vacancies.component';


@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit, AfterContentChecked{

  @ViewChild(VacanciesComponent) vacanciesComponent: VacanciesComponent;

  filter: IFilter


  ngOnInit(){
    this.filter = {
      input: "",
      salary: 0,
      city: "",
      workTime: "",
      experience: "",
      sex: "",
    } 
  }

  ngAfterContentChecked(){
    console.log(this.vacanciesComponent);
  }

  setInput(){
    let input = document.getElementById('search-bar') as HTMLInputElement;
    this.filter.input = input.value;
  }

  clearInput(){
    this.filter.input="";
  }

}
