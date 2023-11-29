import { Component, Input } from '@angular/core';
import { IResume } from '../../../core/models/resume.model';


@Component({
  selector: 'app-resumes-item',
  templateUrl: './resumes-item.component.html',
  styleUrls: ['./resumes-item.component.css']
})
export class ResumesItemComponent {
  @Input('resume') resume: IResume;
  constructor(){
    
  }
}
