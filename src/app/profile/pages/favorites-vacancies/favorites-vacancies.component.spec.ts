import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesVacanciesComponent } from './favorites-vacancies.component';

describe('FavoritesVacanciesComponent', () => {
  let component: FavoritesVacanciesComponent;
  let fixture: ComponentFixture<FavoritesVacanciesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavoritesVacanciesComponent]
    });
    fixture = TestBed.createComponent(FavoritesVacanciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
