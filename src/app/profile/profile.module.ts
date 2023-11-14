import { NgModule } from '@angular/core';

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
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
