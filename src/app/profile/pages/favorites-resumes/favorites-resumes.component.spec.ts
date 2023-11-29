import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesResumesComponent } from './favorites-resumes.component';

describe('FavoritesResumesComponent', () => {
  let component: FavoritesResumesComponent;
  let fixture: ComponentFixture<FavoritesResumesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavoritesResumesComponent]
    });
    fixture = TestBed.createComponent(FavoritesResumesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
