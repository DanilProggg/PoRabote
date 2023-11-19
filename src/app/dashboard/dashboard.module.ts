import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { FilterComponent } from './components/filter/filter.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { PeoplesComponent } from './pages/peoples/peoples.component';
import { VacanciesComponent } from './components/vacancies/vacancies.component';
import { VacanciesItemComponent } from './components/vacancies-item/vacancies-item.component';
import { VacancyPageComponent } from './pages/vacancy-page/vacancy-page.component';
import { HttpClientModule } from '@angular/common/http';





@NgModule({
    declarations: [
        DashboardComponent,
        FilterComponent,
        JobsComponent,
        PeoplesComponent,
        VacanciesComponent,
        VacanciesItemComponent,
        VacancyPageComponent,
    
  ],
    imports: [
        CommonModule,
        HttpClientModule,
        DashboardRoutingModule
    ],
    providers: [],
})
export class DashboardModule { }