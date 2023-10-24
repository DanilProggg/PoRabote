import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { PeoplesComponent } from './pages/peoples/peoples.component';



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
                path: 'peoples',
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