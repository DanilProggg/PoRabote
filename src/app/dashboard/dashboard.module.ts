import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { FilterComponent } from './components/filter/filter.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { PeoplesComponent } from './pages/peoples/peoples.component';
import { VacanciesComponent } from './components/vacancies/vacancies.component';
import { VacanciesItemComponent } from './components/vacancies-item/vacancies-item.component';




@NgModule({
    declarations: [
        DashboardComponent,
        FilterComponent,
        JobsComponent,
        PeoplesComponent,
        VacanciesComponent,
        VacanciesItemComponent,
    
  ],
    imports: [
        CommonModule,
        DashboardRoutingModule
    ],
    providers: [],
})
export class DashboardModule { }