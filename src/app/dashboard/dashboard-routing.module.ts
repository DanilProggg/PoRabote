import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { PeoplesComponent } from './pages/peoples/peoples.component';
import { VacancyPageComponent } from './pages/vacancy-page/vacancy-page.component';



const dashboardRoutes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
           
            { 
                path: '',
                component:JobsComponent
            },
            { 
                path: 'vacancy/:id',
                component:VacancyPageComponent
            },
            { 
                path: 'workers',
                component:PeoplesComponent
            },

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(dashboardRoutes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }