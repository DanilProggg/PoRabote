import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { JobsComponent } from './pages/jobs/jobs.component';
import { PeoplesComponent } from './pages/peoples/peoples.component';
import { VacanciesItemComponent } from './components/vacancies-item/vacancies-item.component';
import { VacancyPageComponent } from './pages/vacancy-page/vacancy-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ResumeItemComponent } from './components/resume-item/resume-item.component';
import { ResumePageComponent } from './pages/resume-page/resume-page.component';
import { ExperiencePipe } from '../core/pipes/experience.pipe';







@NgModule({
    declarations: [
        DashboardComponent,
        JobsComponent,
        PeoplesComponent,
        VacanciesItemComponent,
        VacancyPageComponent,
        ResumeItemComponent,
        ResumePageComponent,
        ExperiencePipe,

    
  ],
    imports: [
        CommonModule,
        HttpClientModule,
        DashboardRoutingModule
    ],
    providers: [
        ExperiencePipe
        ],
})
export class DashboardModule { }