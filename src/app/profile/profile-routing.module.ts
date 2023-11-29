import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile.component';
import { ResumesComponent } from './pages/resumes/resumes.component';
import { CreateNoticeComponent } from './pages/create-notice/create-notice.component';
import { NoticesComponent } from './pages/notices/notices.component';
import { CreateResumeComponent } from './pages/create-resume/create-resume.component';
import { ResumeEditComponent } from './pages/resume-edit/resume-edit.component';
import { NoticeEditComponent } from './pages/notice-edit/notice-edit.component';
import { PersonalComponent } from './pages/personal/personal.component';
import { FavoritesResumesComponent } from './pages/favorites-resumes/favorites-resumes.component';
import { FavoritesVacanciesComponent } from './pages/favorites-vacancies/favorites-vacancies.component';




const profileRoutes: Routes = [
    {
        path: '',
        component: ProfileComponent,
        children: [
            { 
                path: 'profile', 
                component:PersonalComponent
            },
            { 
                path: 'favorites/vacancies', 
                component:FavoritesVacanciesComponent
            },
            { 
                path: 'favorites/resumes', 
                component:FavoritesResumesComponent
            },
            { 
                path: 'resumes', 
                component:ResumesComponent
            },
            { 
                path: 'notices', 
                component:NoticesComponent
            },
            { 
                path: 'resumes/:id', 
                component:ResumeEditComponent
            },
            { 
                path: 'notices/:id', 
                component:NoticeEditComponent
            },
            { 
                path: 'create-resume',
                component:CreateResumeComponent
            },
            { 
                path: 'create-notice', 
                component:CreateNoticeComponent
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(profileRoutes)],
    exports: [RouterModule]
})
export class ProfileRoutingModule { }