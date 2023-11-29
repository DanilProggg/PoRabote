import { Component, Input } from '@angular/core';
import { IResume } from '../../../core/models/resume.model';


@Component({
  selector: 'app-resume-item',
  templateUrl: './resume-item.component.html',
  styleUrls: ['./resume-item.component.css']
})
export class ResumeItemComponent {
  @Input('resume') resume: IResume;
}
