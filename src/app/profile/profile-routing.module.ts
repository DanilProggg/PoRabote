import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile.component';
import { MainComponent } from './pages/main/main.component';
import { CreateNoticeComponent } from './pages/create-notice/create-notice.component';
import { NoticesComponent } from './pages/notices/notices.component';


const profileRoutes: Routes = [
    {
        path: '',
        component: ProfileComponent,
        children: [
           
            { 
                path: '', 
                component:MainComponent
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