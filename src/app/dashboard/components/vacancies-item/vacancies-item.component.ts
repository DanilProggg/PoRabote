import { Component, Input } from '@angular/core';
import { IVacancy } from '../../../core/models/vacancy.model';


@Component({
  selector: 'app-vacancies-item',
  templateUrl: './vacancies-item.component.html',
  styleUrls: ['./vacancies-item.component.css']
})
export class VacanciesItemComponent {
  @Input('vacancy') vacancy: IVacancy;
}
