import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile.component';
import { ResumesComponent } from './pages/resumes/resumes.component';
import { CreateNoticeComponent } from './pages/create-notice/create-notice.component';
import { NoticesComponent } from './pages/notices/notices.component';
import { CreateResumeComponent } from './pages/create-resume/create-resume.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';


const profileRoutes: Routes = [
    {
        path: '',
        component: ProfileComponent,
        children: [
            
            { 
                path: 'favorites', 
                component:FavoritesComponent
            },
            { 
                path: 'resumes', 
                component:ResumesComponent
            },
            { 
                path: 'create-resume',
                component:CreateResumeComponent
            },
            { 
                path: 'notices', 
                component:NoticesComponent
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