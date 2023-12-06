import { Component, Input } from '@angular/core';
import { IResume } from '../../../core/models/resume.model';

@Component({
  selector: 'app-favorite-resume-item',
  templateUrl: './favorite-resume-item.component.html',
  styleUrls: ['./favorite-resume-item.component.css']
})
export class FavoriteResumeItemComponent {
  @Input() resume: IResume;
}
