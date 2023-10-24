import { Component } from '@angular/core';
import { IVacancy } from '../../../core/models/vacancy.model'

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.css']
})
export class VacanciesComponent {

  vacancies : IVacancy[] = [
      {
        id:0,
        title:"Системный администратор",
        salary:70000,
        experience:"Нет",
        organization:"ООО Тиннькоф",
        work_time:"Полный рабочий день",
      },
       {
        id:1,
        title:"Водитель телескопического погрузчика",
        salary:70000,
        experience:"Нет",
        organization:"ООО ОЭМК",
        work_time:"Вахтовый метод",
      },
       {
        id:2,
        title:"Програмист",
        salary:70000,
        experience:"Нет",
        organization:"ООО Стойльнский гок",
        work_time:"Неполный рабочий день",
      },
      {
        id:0,
        title:"Системный администратор",
        salary:70000,
        experience:"Нет",
        organization:"ООО Тиннькоф",
        work_time:"Полный рабочий день",
      },
       {
        id:1,
        title:"Водитель телескопического погрузчика",
        salary:70000,
        experience:"Нет",
        organization:"ООО ОЭМК",
        work_time:"Вахтовый метод",
      },
       {
        id:2,
        title:"Програмист",
        salary:70000,
        experience:"Нет",
        organization:"ООО Стойльнский гок",
        work_time:"Неполный рабочий день",
      },
      {
        id:0,
        title:"Системный администратор",
        salary:70000,
        experience:"Нет",
        organization:"ООО Тиннькоф",
        work_time:"Полный рабочий день",
      },
       {
        id:1,
        title:"Водитель телескопического погрузчика",
        salary:70000,
        experience:"Нет",
        organization:"ООО ОЭМК",
        work_time:"Вахтовый метод",
      },
       {
        id:2,
        title:"Програмист",
        salary:70000,
        experience:"Нет",
        organization:"ООО Стойльнский гок",
        work_time:"Неполный рабочий день",
      },
     
    ];

}
