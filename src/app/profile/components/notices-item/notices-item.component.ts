import { Component, Input } from '@angular/core';
import { IVacancy } from '../../../core/models/vacancy.model';

@Component({
  selector: 'app-notices-item',
  templateUrl: './notices-item.component.html',
  styleUrls: ['./notices-item.component.css']
})
export class NoticesItemComponent {
   @Input('notice') notice: IVacancy;
}
