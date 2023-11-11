import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacancyPageComponent } from './vacancy-page.component';

describe('VacancyPageComponent', () => {
  let component: VacancyPageComponent;
  let fixture: ComponentFixture<VacancyPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VacancyPageComponent]
    });
    fixture = TestBed.createComponent(VacancyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
