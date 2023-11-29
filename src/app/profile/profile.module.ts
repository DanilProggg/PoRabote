import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { CreateNoticeComponent } from './pages/create-notice/create-notice.component';
import { NoticesComponent } from './pages/notices/notices.component';
import { ResumesComponent } from './pages/resumes/resumes.component';
import { CreateResumeComponent } from './pages/create-resume/create-resume.component';
import { ResumesItemComponent } from './components/resumes-item/resumes-item.component';
import { NoticesItemComponent } from './components/notices-item/notices-item.component';
import { VacanciesComponent } from '../dashboard/components/vacancies/vacancies.component';
import { VacanciesItemComponent } from '../dashboard/components/vacancies-item/vacancies-item.component';
import { ResumeEditComponent } from './pages/resume-edit/resume-edit.component';
import { NoticeEditComponent } from './pages/notice-edit/notice-edit.component';
import { PersonalComponent } from './pages/personal/personal.component';
import { FavoritesResumesComponent } from './pages/favorites-resumes/favorites-resumes.component';
import { FavoritesVacanciesComponent } from './pages/favorites-vacancies/favorites-vacancies.component';




@NgModule({
  declarations: [
    ProfileComponent,
    CreateNoticeComponent,
    CreateResumeComponent,
    NoticesComponent,
    ResumesComponent,
    ResumesItemComponent,
    NoticesItemComponent,
    ResumeEditComponent,
    NoticeEditComponent,
    PersonalComponent,
    FavoritesResumesComponent,
    FavoritesVacanciesComponent,
 
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProfileModule { }
