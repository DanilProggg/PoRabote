import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacanciesItemComponent } from './vacancies-item.component';

describe('VacanciesItemComponent', () => {
  let component: VacanciesItemComponent;
  let fixture: ComponentFixture<VacanciesItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VacanciesItemComponent]
    });
    fixture = TestBed.createComponent(VacanciesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
