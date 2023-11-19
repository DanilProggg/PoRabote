import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { CreateNoticeComponent } from './pages/create-notice/create-notice.component';
import { NoticesComponent } from './pages/notices/notices.component';
import { ResumesComponent } from './pages/resumes/resumes.component';
import { CreateResumeComponent } from './pages/create-resume/create-resume.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { FavoritesItemComponent } from './components/favorites-item/favorites-item.component';
import { ResumesItemComponent } from './components/resumes-item/resumes-item.component';
import { NoticesItemComponent } from './components/notices-item/notices-item.component';
import { VacanciesComponent } from '../dashboard/components/vacancies/vacancies.component';
import { VacanciesItemComponent } from '../dashboard/components/vacancies-item/vacancies-item.component';




@NgModule({
  declarations: [
    ProfileComponent,
    CreateNoticeComponent,
    NoticesComponent,
    ResumesComponent,
    CreateResumeComponent,
    FavoritesComponent,
    FavoritesItemComponent,
    ResumesItemComponent,
    NoticesItemComponent,
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProfileModule { }
