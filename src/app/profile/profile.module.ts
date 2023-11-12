import { NgModule } from '@angular/core';

import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { MainComponent } from './pages/main/main.component';
import { CreateNoticeComponent } from './pages/create-notice/create-notice.component';
import { NoticesComponent } from './pages/notices/notices.component';




@NgModule({
  declarations: [
    ProfileComponent,
    MainComponent,
    CreateNoticeComponent,
    NoticesComponent,
  ],
  imports: [
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
