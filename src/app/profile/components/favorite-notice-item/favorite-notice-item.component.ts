import { Component, Input } from '@angular/core';
import { IVacancy } from '../../../core/models/vacancy.model';
@Component({
  selector: 'app-favorite-notice-item',
  templateUrl: './favorite-notice-item.component.html',
  styleUrls: ['./favorite-notice-item.component.css']
})
export class FavoriteNoticeItemComponent {
  @Input() notice: IVacancy;
}
