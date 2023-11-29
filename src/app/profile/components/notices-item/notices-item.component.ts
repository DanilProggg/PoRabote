import { Component, Input } from '@angular/core';

import { IVacancy } from '../../../core/models/vacancy.model';
import { VacancyService } from '../../../core/services/vacancy.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notices-item',
  templateUrl: './notices-item.component.html',
  styleUrls: ['./notices-item.component.css']
})
export class NoticesItemComponent {
   @Input('notice') notice: IVacancy;

}
